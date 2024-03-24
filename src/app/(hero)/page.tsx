import MotionTest from "./_components/MotionTest";

export default function Home() {
  return (
    <>
      <div className="h-[100vh]"></div>

      <div className="h-[250vh] ">
        <MotionTest />
      </div>
      <div className="h-[100vh]"></div>
    </>
  );
}
