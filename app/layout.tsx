// import type { Metadata } from "next";
// import "./globals.css";
// import Header from "@/components/Header";
// import localFont from "next/font/local";
// import Footer from "@/components/Footer";
// import Head from "next/head";
// import { ToastContainer } from "react-toastify";
// import Image from "next/image";
// import FixedContacts from "@/components/FixedContacts";
// // Font files can be colocated inside of `app`
// const myFont = localFont({
//   src: "../Assets/TildaSans/TildaSans-VF.woff2",
//   display: "swap",
//   variable: "--tilda-sans",
// });

// export const metadata: Metadata = {
//   title: "Vernissage",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={myFont.className}>
//       <Head>
//         <meta name="yandex-verification" content="269413a45fa00b70" />
//         <meta name="google-site-verification" content="qhgSkn_JyPlG_ILAhyGJcFfOkbg56W9XxvaGH_0pO78" />
//       </Head>
//       <body>
//         <ToastContainer progressClassName={"toast"} />
//         <div
//           className="container 
//   "
//         >
//           <FixedContacts />
//           <Header />
//           {children}
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import FixedContacts from "@/components/FixedContacts";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "../Assets/TildaSans/TildaSans-VF.woff2",
  display: "swap",
  variable: "--tilda-sans",
});

export const metadata: Metadata = {
  title: "Vernissage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      <head>
        <meta name="yandex-verification" content="269413a45fa00b70" />
        <meta name="google-site-verification" content="qhgSkn_JyPlG_ILAhyGJcFfOkbg56W9XxvaGH_0pO78" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i] || function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(98863064, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/98863064"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body>
        <ToastContainer progressClassName={"toast"} />
        <div className="container">
          <FixedContacts />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
