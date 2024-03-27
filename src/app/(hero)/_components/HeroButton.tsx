import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
  color: "white" | "iris";
  onClick: () => void;
};

// todo: classnames 추가
const HeroButton = ({ title, icon, color, onClick }: Props) => {
  const buttonColor = color === "white" ? "#e7eefe" : "#5b5bd5";
  const textColor = color === "white" ? "text-black" : "";
  const font = color === "white" ? "font-semibold" : "font-normal";

  return (
    <button
      className={`self-start ${font} ${textColor} text-[1.2vw] border-2 border-[${buttonColor}] p-[0.6vw] px-[1vw] rounded-xl bg-[${buttonColor}] hover:opacity-85`}
      onClick={onClick}
    >
      <div className="flex gap-2 items-center">
        {icon}
        <div>{title}</div>
      </div>
    </button>
  );
};

export default HeroButton;
