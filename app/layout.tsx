import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tharahata3405.github.io/fatheros/"),
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
      <body>{children}</body>
    </html>
  );
}
