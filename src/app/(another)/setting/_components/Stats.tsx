"use client";
import { getUserInfo } from "@/octokit/fetcher";
import { useState } from "react";

const Stats = () => {
  const [name, setName] = useState("");

  const handleClick = async () => {
    const data = await getUserInfo(name);
    console.log(data);
  };
  return (
    <div>
      <button onClick={handleClick}>click</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>dd</div>
    </div>
  );
};

export default Stats;
