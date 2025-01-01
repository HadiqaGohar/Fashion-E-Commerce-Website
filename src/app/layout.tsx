import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
// import { CartProvider } from "use-shopping-cart";
import Footer from "./components/Footer";
// import { CartProvider } from "./contexts/CartContext";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
      <html lang="en">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
  

  );
}
