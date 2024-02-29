import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { AppProvider } from "@/components/AppContext";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Food Order",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main
          className="max-w-5xl mx-auto border-4 border-black/80
         p-2 shadow-xl shadow-black/50 rounded-2xl mt-2 mb-4"
        >
          <ShoppingCartProvider>
            <AppProvider>
              <Header />
              
              {children}

              <footer className="border-t p-8 text-center mt-44 text-gray-500 ">
                &copy; 2024-João pedro Maciel pinheiro
                <div className="flex gap-8 text-center justify-center  items-center mt-2">
                  <Link
                    href={"https://www.linkedin.com/in/jpmp1998/"}
                    target="blank"
                  >
                    <Linkedin className="text-blue-400" />
                  </Link>
                  <Link
                    href={"https://github.com/Pedro-maciel-pinheiro"}
                    target="blank"
                  >
                    <Github className="text-purple-700" />
                  </Link>
                </div>
              </footer>
            </AppProvider>
          </ShoppingCartProvider>
        </main>
      </body>
    </html>
  );
}
