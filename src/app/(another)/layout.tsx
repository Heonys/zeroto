import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

type Props = {
  children: React.ReactNode;
};

const HeroLayout = ({ children }: Props) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="p-2 mt-2 rounded-3xl border-2 shadow-xl h-[88vh] bg-white relative">
        {children}
      </div>
    </Suspense>
  );
};

export default HeroLayout;
