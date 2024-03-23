type Props = {
  children: React.ReactNode;
};

const HeroLayout = ({ children }: Props) => {
  return (
    <div className="p-2 mt-2 rounded-3xl border-2 shadow-xl h-[85vh] bg-white relative">
      {children}
    </div>
  );
};

export default HeroLayout;
