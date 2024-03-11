"use client";
import { Card } from "@radix-ui/themes";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  RadarChart,
  PolarAngleAxis,
  Radar,
  PolarGrid,
  PolarRadiusAxis,
  Legend,
} from "recharts";

type Props = {
  open: number;
  inProgress: number;
  closed: number;
};

const Chart = ({ open, inProgress, closed }: Props) => {
  //   const data = [
  //     { label: "Opne", value: open },
  //     { label: "In Progress", value: inProgress },
  //     { label: "Closed", value: closed },
  //   ];

  const data = [
    {
      subject: "Commit",
      A: 120,
      fullMark: 150,
    },
    {
      subject: "Issue",
      A: 98,
      fullMark: 150,
    },
    {
      subject: "Star",
      A: 5,
      fullMark: 50,
    },
    {
      subject: "Fork",
      A: 15,
      fullMark: 50,
    },
  ];

  return (
    <Card>
      <ResponsiveContainer width="100%" height={260}>
        {/* <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar
            dataKey="value"
            barSize={60}
            style={{ fill: "var(--accent-9)" }}
          />
        </BarChart> */}

        <RadarChart outerRadius={90} width={730} height={250} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            dataKey="A"
            // stroke="#d82e5a"
            fill="#d82e5a"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
