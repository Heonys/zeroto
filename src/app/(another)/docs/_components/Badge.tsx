type Props = {
  color: "orange" | "blue" | "red";
  text: string;
};

const Badge = ({ color, text }: Props) => {
  const badgeClassName = `mx-1 inline-block whitespace-nowrap rounded-[0.27rem] px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-semibold leading-none ${
    color === "orange"
      ? "bg-[#faf2dd] text-[#ca6c2e]"
      : color === "blue"
        ? "bg-[#e6f4fd] text-[#2581d2]"
        : color === "red"
          ? "bg-[#fee9f0] text-[#cd4d80]"
          : ""
  }`;

  return <span className={badgeClassName}>{text}</span>;
};

export default Badge;
