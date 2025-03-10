import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SideBar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });
const monstserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nova Helpdesk",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monstserrat.className} font-medium flex`}>
        <div className="w-[20%]">
          <SideBar/>
        </div>
        <div className="w-[80%]">
          {children}
        </div>
      </body>
    </html>
  );
}
