import type { Metadata } from "next";
import "../styles/globals.css";
import { Montserrat } from "next/font/google";

const layout_font = Montserrat({
  weight: ['400', '500', '700', '600', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "bookingLabour",
  description: "Tinh ban dieu ki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
        <body className={`${layout_font.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
