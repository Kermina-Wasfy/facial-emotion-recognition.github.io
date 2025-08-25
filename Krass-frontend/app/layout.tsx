import "./globals.css";
import Header from "@/components/general/Header/Header";
import Footer from "@/components/general/Footer/Footer";
import ReactQuery from "@/lib/ReactQuery";
import ClientLayout from "./ClientLayout";
import localFont from 'next/font/local';

const charis = localFont({
  src: [
    {
      path: '../public/fonts/Charis-MediumItalic.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Charis-MediumItalic.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-charis',
});

export const metadata = {
  title: "Krass",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${charis.variable}`}>
      <body className="bg-[#1f1e1e]">
        <ReactQuery>
          <ClientLayout>
            <Header />
            <main className="overflow-x-hidden">
            {children}
            </main>
            <Footer />
          </ClientLayout>
        </ReactQuery>
      </body>
    </html>
  );
}
