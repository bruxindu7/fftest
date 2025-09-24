// app/api/player-lookup/route.ts (ou onde estiver sua rota)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const allowedOrigins = [
  'http://localhost:3000',
  'https://www.recargasjogos.skin',
];

function isOriginAllowed(request: NextRequest): boolean {
  const referer = request.headers.get('referer');
  if (!referer) return false;
  return allowedOrigins.some((origin) => referer.startsWith(origin));
}

export async function GET(request: NextRequest) {
  if (!isOriginAllowed(request)) {
    return NextResponse.json({ error: 'Clonou errado kk' }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const uid = searchParams.get('uid');

  if (!uid) {
    return NextResponse.json(
      { error: 'O ID do jogador é obrigatório.' },
      { status: 400 }
    );
  }

  try {
    // escape uid para evitar problemas com caracteres especiais
    const encodedUid = encodeURIComponent(uid);
    const apiResponse = await fetch(
      `https://freefirefwx-beta.squareweb.app/api/info_player?uid=${encodedUid}&region=br`,
      { next: { revalidate: 60 } } // opcional: cache control no Next fetch
    );

    // tenta transformar em json (pode lançar)
    const data = await apiResponse.json();

    // Se a API retornar nickname válido, retorna-o
    if (data?.basicInfo?.nickname) {
      return NextResponse.json({ nickname: data.basicInfo.nickname }, { status: 200 });
    }

    // Caso a API não tenha nickname, retornamos o uid como fallback (solicitado)
    return NextResponse.json({ nickname: uid }, { status: 200 });
  } catch (error) {
    console.error('Player lookup request failed:', error);
    // Em caso de erro (network, parse, etc.) também retornamos o uid como nickname
    return NextResponse.json({ nickname: uid }, { status: 200 });
  }
}
