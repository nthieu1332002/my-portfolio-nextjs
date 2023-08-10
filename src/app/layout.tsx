import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import SideBar from "@/components/Sidebar/Sidebar";
const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nthieu-portfolio.vercel.app/"),
  title: {
    default: "My Portfolio | Nguyen Trung Hieu | Nextjs | SEO",
    template: `%s | Nguyen Trung Hieu | Nextjs | SEO`,
  },
  description:
    "Welcome to my portfolio! Showcase of my expertise in web skills. Browse through my projects, demonstrating creativity, user experience (UX), and clean code. Explore my skills in creating intuitive user interfaces (UI) and optimizing web performance. Get in touch for potential collaborations or employment opportunities.",
  generator: "Next.js",
  applicationName: "My Portfolio | Nguyen Trung Hieu | Nextjs | SEO",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "nthieu1332002",
    "nthieu1332002@gmail.com",
    "Nextjs SEO",
    "Nextjs SEO Application",
    "Nextjs improved SEO",
    "Nextjs Portfolio SEO",
    "Nextjs Portfolio",
    "Nguyen Trung Hieu",
    "Nguyễn Trung Hiếu",
  ],
  authors: [
    { name: "Nguyen Trung Hieu" },
    { name: "Nguyen Trung Hieu", url: "https://github.com/nthieu1332002" },
  ],
  colorScheme: "dark",
  creator: "Nguyen Trung Hieu - nthieu",
  publisher: "Nguyen Trung Hieu - nthieu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Next.js Portfolio SEO | Nguyen Trung Hieu | nthieu",
    description: "Welcome to my portfolio!",
    images: [
      {
        url: "/open_image.png",
        width: 400,
        height: 300,
      },
    ],
  },
  verification: {
    google: "Q6IrZ6WdultCzfn7p0wuDtiaHfqW21m_2aVGHethVOg",
    
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
