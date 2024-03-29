"use client";
import { octokit } from "@/util/octokit";

const Stats = () => {
  const handleClick = async () => {
    try {
      const response = await octokit.repos.listForAuthenticatedUser();
      console.log(response.data);
    } catch (error: any) {
      console.error("Error fetching repositories:", error.message);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>click</button>

      <div>dd</div>
    </div>
  );
};

export default Stats;
