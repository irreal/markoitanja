import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
      <body className={`bg-bgf bg-cover bg-right-top md:bg-fill md:bg-center `}>
        <div className="w-full h-full bg-transparent">{children}</div>
      </body>
    </html>
  );
}
