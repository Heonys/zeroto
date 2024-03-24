type Props = {
  children: React.ReactNode;
};

const HeroLayout = ({ children }: Props) => {
  return (
    <div className="p-2 mt-2 rounded-3xl border-2 shadow-xl relative  bg-[#030a15]">
      {children}
    </div>
  );
};

export default HeroLayout;
