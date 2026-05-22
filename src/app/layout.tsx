import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import SideBar from "@/components/Sidebar/Sidebar";
const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nthieu-portfolio.pages.dev/"),
  title: {
    default: "Nguyen Trung Hieu | Front-end Developer | React & Next.js Specialist",
    template: `%s | Nguyen Trung Hieu | Front-end Developer`,
  },
  description:
    "Front-end Developer with 3+ years of experience specializing in React, Next.js, and TypeScript. Skilled in building high-performance web applications with SEO optimization, responsive design, and full-stack capabilities including Node.js, Express, MongoDB, ASP.NET, Power Pages, and Dataverse.",
  generator: "Next.js",
  applicationName: "Nguyen Trung Hieu | Front-end Developer Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Front-end Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Full-stack Developer",
    "Node.js",
    "ASP.NET",
    "Power Pages",
    "Dataverse",
    "Web Developer Vietnam",
    "SEO Optimization",
    "Responsive Web Design",
    "Nguyen Trung Hieu",
    "Nguyễn Trung Hiếu",
    "nthieu1332002",
    "Tailwind CSS",
    "REST API",
    "MongoDB",
    "Express.js",
  ],
  authors: [
    { name: "Nguyen Trung Hieu" },
    { name: "Nguyen Trung Hieu", url: "https://github.com/nthieu1332002" },
  ],
  creator: "Nguyen Trung Hieu - nthieu",
  publisher: "Nguyen Trung Hieu - nthieu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Nguyen Trung Hieu | Front-end Developer | React & Next.js Specialist",
    description:
      "Experienced Front-end Developer building scalable web applications with React, Next.js, and TypeScript. Full-stack capable with Node.js, MongoDB, ASP.NET, Power Pages, and Dataverse.",
    images: [
      {
        url: "/open_image.png",
        width: 400,
        height: 300,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "tQA75hRPSCa4q5sfskJVXELUc14ASpYcHNYEeAKtJy0",
  },
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
