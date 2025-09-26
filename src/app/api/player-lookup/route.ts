// app/api/player-lookup/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
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
      { next: { revalidate: 60 } } // cache opcional
    );

    const data = await apiResponse.json();

    if (data?.basicInfo?.nickname) {
      return NextResponse.json({ nickname: data.basicInfo.nickname }, { status: 200 });
    }

    return NextResponse.json({ nickname: uid }, { status: 200 });
  } catch (error) {
    console.error('Player lookup request failed:', error);
    return NextResponse.json({ nickname: uid }, { status: 200 });
  }
}
