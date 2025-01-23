import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jr Air Conditioner",
  description: "Ac Services",
  icons:{
    icon:"/svg/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable} antialiased`}>
        <div className="block md:hidden">
          <Sidebar />
        </div>
        <div className="hidden md:block">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
