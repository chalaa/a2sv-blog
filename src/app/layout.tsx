import type { Metadata } from "next";
import { Inter,Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });
const montserrat = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "A2SV Blog",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
