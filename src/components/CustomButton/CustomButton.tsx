import React from "react";

type ButtonProps = {
  onClick?: () => void;
  icon?: JSX.Element;
  text?: string;
  // additional props
  disabled?: boolean;
  className?: string;
};

const CustomButton = ({ icon, text }: ButtonProps) => {
  return (
    <button className="flex gap-2 text-sm font-bold p-3 px-4 rounded-full text-white bg-button-bg hover:text-primary duration-500">
      {icon} {text}
    </button>
  );
};

export default CustomButton;
