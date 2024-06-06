"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const formatYAxis = (tickItem) => {
  return `${tickItem / 1000}k`;
};

const colorMapping = {
  pv: "#8884d8",
  uv: "#82ca9d",
  amt: "#ffc658",
  pnp: "#ff0000",
  ppp: "#00ff00",
};


const data = [
    {
      name: "Page A",
      pv: 240000,
      uv: 400000,
      amt: 240000,
      pnp: 210081,
      ppp: 210081
    },
    {
      name: "Page B",
      pv: 480000,
      uv: 180090,
      amt: 210081,
      pnp: 210081,
      ppp: 210081,
    },
    {
      name: "Page C",
      pv: 380000,
      uv: 230090,
      amt: 250000,
      pnp: 210081,
      ppp: 210081,
    },
    {
      name: "Page D",
      pv: 430000,
      uv: 340090,
      amt: 210000,
      pnp: 210081,
      ppp: 210081,
    },
    {
      name: "Page H",
      pv: 320010,
      uv: 300000,
      amt: 180000,
      pnp: 210081,
      ppp: 210081,
    },
    {
      name: "Page I",
      pv: 380000,
      uv: 239000,
      amt: 250000,
      pnp: 210081,
      ppp: 210081
    }
  ];

export default function AssetLiabilitiesChart() {
  const keys = Object.keys(data[0]);

  return (
    <div className="flex justify-center overflow-hidden">
      <BarChart
        width={640}
        height={250}
        data={data}
        margin={{
          top: 10,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" horizontal={true} vertical={false} />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" domain={[100000, 300000]} tickFormatter={formatYAxis}  tick={{ fontSize: 12 }}/>
        <Tooltip
          wrapperStyle={{
            width: 'auto', 
          }}
        />
        <Legend layout="horizontal" verticalAlign="top" align="left" />

        {keys
          .filter((key) => key !== "name")
          .map((key, index) => (
            <Bar
              key={index}
              yAxisId="left"
              dataKey={key}
              fill={colorMapping[key]}
              radius={[3, 3, 3, 3]}
            />
          ))}
      </BarChart>
    </div>
  );
}
