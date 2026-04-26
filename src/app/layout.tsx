import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Suuq.com - Somalia's Online Marketplace",
  description: "Shop from the comfort of your home with secure payments and fast delivery across Somalia.",
  keywords: "online shopping, Somalia, e-commerce, marketplace, electronics, fashion, home goods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
