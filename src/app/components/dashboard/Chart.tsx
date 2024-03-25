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
  commit: number;
  issue: number;
  star: number;
  fork: number;
};

const Chart = ({ commit, issue, star, fork }: Props) => {
  const total = commit + issue + star + fork;

  const data = [
    {
      subject: "Commit",
      A: commit,
      fullMark: total,
    },
    {
      subject: "Issue",
      A: total / 10 + issue,
      fullMark: 100,
    },
    {
      subject: "Star",
      A: total / 10 + star,
      fullMark: 100,
    },
    {
      subject: "Fork",
      A: total / 10 + fork,
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
