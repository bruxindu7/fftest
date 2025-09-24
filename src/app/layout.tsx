'use client';

import { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);

  const isNotFoundPage = pathname === '/_not-found';

  useEffect(() => {
    if (isNotFoundPage) return;

    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 500);

    const handleLoad = () => {
      setIsNavigating(false);
      clearTimeout(timer);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      const observer = new MutationObserver(() => {
        if (document.readyState === 'complete') {
          handleLoad();
          observer.disconnect();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, [pathname, searchParams, isNotFoundPage]);

  return (
    <>
      {isNavigating && !isNotFoundPage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
          <div className="loading-spinner"></div>
        </div>
      )}
      <div
        className={cn(
          'min-h-screen bg-background font-sans antialiased transition-opacity duration-300',
          isNavigating && !isNotFoundPage ? 'opacity-0' : 'opacity-100'
        )}
      >
        {children}
        <Toaster />
      </div>
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <title>Centro de Recarga Free Fire</title>
        <meta
          name="description"
          content="O site oficial para comprar diamantes no Free Fire. Vários métodos de pagamento estão disponíveis para os jogadores do Brasil."
        />

        {/* Google Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17598284687"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17598284687');
            `,
          }}
        />

        {/* UTMify */}
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck="true"
          data-utmify-prevent-subids="true"
          async
          defer
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "68d210e60acfc00e2c22a0dc";
              (function(){
                try {
                  var a = document.createElement("script");
                  a.setAttribute("async", "");
                  a.setAttribute("defer", "");
                  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
                  document.head.appendChild(a);
                } catch(e) {
                  console.error('utmify pixel load failed', e);
                }
              })();
            `,
          }}
        />

        {/* ✅ Meta Pixel ÚNICO (ID 794516693273767) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '794516693273767');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=794516693273767&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={cn('overflow-y-scroll font-sans', inter.variable)}>
        <Suspense fallback={null}>
          <LayoutContent>{children}</LayoutContent>
        </Suspense>
      </body>
    </html>
  );
}
