import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/general/Header/Header";
import ReactQuery from "@/lib/ReactQuery";
import ClientLayout from "./ClientLayout";
import Footer from "@/components/general/Footer/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Theta",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <ReactQuery>
          <ClientLayout>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </ClientLayout>
        </ReactQuery>
      </body>
    </html>
  );
}
