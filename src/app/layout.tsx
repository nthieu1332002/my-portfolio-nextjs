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
      <body>
        <div className="flex">
          <SideBar />
          <div className="bg-gray-800 w-screen h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
