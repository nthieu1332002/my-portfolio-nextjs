"use client";

import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuList } from "react-icons/lu";
import { AiOutlineMail, AiOutlineFacebook } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

import { usePathname } from "next/navigation";
const Sidebar = () => {
  const router = usePathname();
  const Menus = [
    { title: "Home", icon: <BiHomeAlt />, link: "/" },
    { title: "About", icon: <BiUser />, link: "/about" },
    { title: "Resume", icon: <IoNewspaperOutline />, link: "/resume" },
    { title: "Portfolio", icon: <LuList />, link: "/portfolio" },
    { title: "Contact", icon: <AiOutlineMail />, link: "/contact" },
  ];

  const Socials = [
    {
      title: "Facebook",
      icon: <AiOutlineFacebook />,
      link: "https://www.facebook.com/MediumHealing13/",
    },
    {
      title: "Github",
      icon: <BsGithub />,
      link: "https://github.com/nthieu1332002",
    },
  ];
  return (
    <div className="flex flex-col justify-center fixed bottom-0 z-50 w-full md:right-[0.5%] md:h-full md:w-12">
      <div className="flex flex-row justify-evenly py-4 md:rounded-full md:flex-col md:items-center md:gap-10 md:py-10 bg-nav-bg">
        {Menus.map((menu, index) => (
          <Link
            key={index}
            data-tooltip={menu.title}
            href={menu.link}
            className={`relative text-2xl md:text-lg cursor-pointer  ${
              router === menu.link
                ? "text-primary-color hover:text-primary-color"
                : "text-white-primary hover:text-white tooltip"
            }`}
          >
            {menu.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
