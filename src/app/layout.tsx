import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import SideBar from "@/components/Sidebar/Sidebar";
const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio | Nguyen Trung Hieu",
  description: "Nguyen Trung Hieu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mont.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="no-scrollbar">
        <div className="relative">
          <SideBar />
          <div className="bg-gray-800 max-w-screen h-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
