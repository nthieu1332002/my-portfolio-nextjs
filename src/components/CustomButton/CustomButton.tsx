import Link from "next/link";
import React from "react";

type ButtonProps = {
  link: string;
  title?: string;
  icon?: JSX.Element;
  text?: string;
  download?: boolean;
};

const CustomButton = ({ link, title, icon, text, download }: ButtonProps) => {
  return (
    <Link href={link} title={title} download={download} target="_blank" className="flex gap-2 text-sm font-bold p-3 px-4 rounded-full text-white bg-button-bg hover:text-primary-color hover:-translate-y-1 hover:drop-shadow-lg duration-500">
      {icon} {text}
    </Link>
  );
};

export default CustomButton;
