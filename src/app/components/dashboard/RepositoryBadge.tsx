type Props = {
  color: string;
  text: string;
};

const RepositoryBadge = ({ color, text }: Props) => {
  return (
    // <Flex align="center" gap="2">
    //   <div
    //     className="rounded-full w-3 h-3 "
    //     style={{ backgroundColor: color }}
    //   ></div>
    //   <div>{text}</div>
    // </Flex>
    <span
      className="text-white mx-1 inline-block whitespace-nowrap rounded-[0.27rem] px-[0.65em] pb-[0.35em] pt-[0.35em] text-center align-baseline text-[0.85em] font-semibold leading-none"
      style={{ backgroundColor: color }}
    >
      {text}
    </span>
  );
};

export default RepositoryBadge;
