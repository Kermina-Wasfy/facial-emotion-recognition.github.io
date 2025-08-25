import "./globals.css";
import Header from "@/components/general/Header/Header";
import Footer from "@/components/general/Footer/Footer";
import ReactQuery from "@/lib/ReactQuery";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Krass",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#1f1e1e]">
        <ReactQuery>
          <ClientLayout>
            <Header />
            {children}
            <Footer />
          </ClientLayout>
        </ReactQuery>
      </body>
    </html>
  );
}
