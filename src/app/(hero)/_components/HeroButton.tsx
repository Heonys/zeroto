import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
  color: "white" | "blue";
  onClick: () => void;
};

const HeroButton = ({ title, icon, color, onClick }: Props) => {
  const colorStyle =
    color === "white"
      ? "bg-[#e7eefe] border-[#e7eefe] text-black font-semibold"
      : "bg-[#5b5bd5] border-[#5b5bd5] text-white font-normal";

  return (
    <button
      className={`${colorStyle} self-start text-[1.2vw] border-2 p-[0.6vw] px-[1vw] rounded-xl  hover:opacity-85`}
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
