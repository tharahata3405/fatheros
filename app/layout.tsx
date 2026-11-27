import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// Google Tag Manager container ID for Google Analytics.
// Set up by the site owner on 2026-11-27.
const GTM_ID = "GTM-587P7PFM";

export const metadata: Metadata = {
  metadataBase: new URL("https://tharahata3405.github.io/fatheros/"),
  alternates: {
    canonical: "https://tharahata3405.github.io/fatheros/",
  },
  title: "父親OS｜はらはた敏之｜父親と家族を再接続する",
  description:
    "父親として無意識に持っている「当たり前」を見つめ、今の家族に合う形へ少しずつ更新する「父親OS」。ものづくりや日常の観察を通して、父親と家族の関係を考える、はらはた敏之のブランドサイトです。",
  openGraph: {
    title: "父親OSを、更新する。｜はらはた敏之",
    description: "父親としての「当たり前」を見つめ、今の家族に合う形へ。",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1600,
        height: 900,
        alt: "父親OSを、更新する。父親と家族を再接続する｜はらはた敏之",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "父親OSを、更新する。｜はらはた敏之",
    description: "父親としての「当たり前」を見つめ、今の家族に合う形へ。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":
          new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=
          "https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,"script","dataLayer","${GTM_ID}");`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="menu-close" strategy="afterInteractive">
          {`document.querySelectorAll(".menu nav a").forEach(function (a) {
            a.addEventListener("click", function () {
              var d = a.closest("details");
              if (d) d.removeAttribute("open");
            });
          });`}
        </Script>
      </body>
    </html>
  );
}
