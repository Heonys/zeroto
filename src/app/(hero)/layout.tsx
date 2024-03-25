type Props = {
  children: React.ReactNode;
};

const HeroLayout = ({ children }: Props) => {
  return (
    <div className="mt-2 rounded-3xl border-2 shadow-xl relative bg-[#191c23]">
      {children}
    </div>
  );
};

export default HeroLayout;
