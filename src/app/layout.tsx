import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";
import Image from "next/image";
import Email from "@/components/Email/Email";
import { Mail } from "lucide-react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Towards Green Future",
  description:
    'Towards Green Future (TGF) is a non-profit organization committed to fostering sustainable growth, promoting climate awareness, and driving environmental responsibility across communities',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        {/* Custom fonts moved to _document.tsx */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"></link>
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
              fbq('init', '1460012718523627');
              fbq('track', 'PageView');
            `,
          }}
        />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
      </head>


      <body className={roboto.className}>
        
        <Layout>
          {children}
       
        </Layout>
         <div style={{ position: "fixed", bottom: "99px", right: "40px", zIndex: 1000,borderRadius: "51%",cursor: "pointer" }}>
          <a href="mailto:info@towardsgreenfuture.com" target="_blank" rel="noopener noreferrer" >
            <Image src="/image/email-icon.png" alt="Email Us" width={60} height={60} className="bg-[#fff] rounded-full shadow-lg" />
          </a>
       </div>

        <div style={{ position: "fixed", bottom: "40px", right: "40px", zIndex: 1000, borderRadius: "50%",cursor: "pointer" }}>
          
        
        
       </div>

         <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1460012718523627&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
