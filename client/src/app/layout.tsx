import type { Metadata } from "next";
import "../styles/globals.css";
import { Montserrat } from "next/font/google";
import { ReduxProvider } from "@/components/ReduxProvider";

const layout_font = Montserrat({
  weight: ['400', '500', '700', '600', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "DreamLabour",
  description: "Tinh ban dieu ki",
  icons: {
    icon: '/img/favicon/favicon1.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
        <body className={`${layout_font.className} antialiased`}>
          <ReduxProvider>
            {children}
          </ReduxProvider>
      </body>
    </html>
  );
}
