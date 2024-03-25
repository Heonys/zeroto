import MotionTest from "./_components/SpaceMotion";
import HeroMotion from "./_components/HeroMotion";

export default function Home() {
  return (
    <>
      <div className="h-[200vh]">
        <HeroMotion />
      </div>

      <div className="h-[15vh]"></div>

      <div className="h-[250vh] ">
        <MotionTest />
      </div>
    </>
  );
}
