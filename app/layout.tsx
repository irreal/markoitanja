import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tatjana i Marko",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-bgf bg-cover bg-right-top md:bg-fill md:bg-center `}
      >
        <div className="w-full h-full bg-transparent">{children}</div>
      </body>
    </html>
  );
}
