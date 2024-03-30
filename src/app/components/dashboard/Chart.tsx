"use client";
import { Card } from "@radix-ui/themes";
import {
  ResponsiveContainer,
  RadarChart,
  PolarAngleAxis,
  Radar,
  PolarGrid,
  PolarRadiusAxis,
} from "recharts";

type Props = {
  commits: number;
  stars: number;
  issues: number;
  pullRequests: number;
};

const Chart = ({ commits, issues, stars, pullRequests }: Props) => {
  const total = commits + issues + stars + pullRequests;

  const data = [
    {
      subject: "Commit",
      A: total / 10 + commits,
      fullMark: total,
    },
    {
      subject: "Issue",
      A: total / 10 + issues,
      fullMark: 100,
    },
    {
      subject: "Star",
      A: total / 10 + stars,
      fullMark: 100,
    },
    {
      subject: "PullRequest",
      A: total / 10 + pullRequests,
      fullMark: 100,
    },
  ];

  return (
    <Card className="h-[40vh]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={90}
          width={730}
          height={250}
          data={data}
          className="desktoplg:scale-125 desktopxl:scale-150 desktop2xl:scale-[1.7]"
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} />
          <Radar dataKey="A" fill="#d82e5a" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
