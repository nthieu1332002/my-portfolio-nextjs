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
    <div className="flex flex-col justify-between bg-nav-bg h-screen p-2 pt-8 w-16">
      <div className="flex flex-col items-center">
        {Menus.map((menu, index) => (
          <Link
            key={index}
            data-tooltip={menu.title}
            href={menu.link}
            className={`relative text-xl p-3 cursor-pointer  ${
              router === menu.link
                ? "text-primary hover:text-primary"
                : "text-white-primary hover:text-white tooltip"
            }`}
          >
            {menu.icon}
          </Link>
        ))}
      </div>
      <div>
        <div className="flex flex-col items-center">
          {Socials.map((menu, index) => (
            <Link
              href={menu.link}
              target="_blank"
              key={index}
              data-tooltip={menu.title}
              className="relative text-white-primary text-xl p-3 cursor-pointer hover:text-white tooltip"
            >
              {menu.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
