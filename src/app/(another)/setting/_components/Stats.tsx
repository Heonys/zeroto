"use client";
import { useState } from "react";

const Stats = () => {
  const [name, setName] = useState("");

  const handleClick = async () => {};
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
