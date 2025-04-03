import type { Metadata } from "next";
import { IBM_Plex_Sans_JP } from "next/font/google";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans_JP({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "ソフトウェアエンジニアのポートフォリオサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={ibmPlex.className}>
      <body className="bg-[#212737] text-white">
        {children}
      </body>
    </html>
  );
}
