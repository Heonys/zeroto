"use client";
import { Button } from "@radix-ui/themes";

type Props = {
  name: string;
};

const LikesButton = () => {
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const res = await fetch("/api/likes");
    const data = await res.json();
    console.log(data);
  };

  return <Button onClick={handleClick}>likes</Button>;
};

export default LikesButton;
