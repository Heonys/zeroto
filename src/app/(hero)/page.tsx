import dynamic from "next/dynamic";
import SpaceMotion from "./_components/SpaceMotion";

const HeroMotion = dynamic(() => import("./_components/HeroMotion"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <HeroMotion />
      <SpaceMotion />
    </>
  );
}
