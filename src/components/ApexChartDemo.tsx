"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Load client-side only
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options: ApexOptions = {
  chart: { type: "area", background: "transparent" , 
    toolbar: { show: false },
  
  
  },
   xaxis: {
    type: "datetime",
    labels: {
      style: {
        colors: "#fff", // ✅ pick your Tailwind / HEX color
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#fff", // ✅ pick your Tailwind / HEX color
      },
    },
    min: 0,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
      colorStops: [
        {
          offset: 0,
          color: "#10b981",
          opacity: 1,
        },
        {
          offset: 100,
          color: "#3b82f6", 
          opacity: 1,
        },    
      ],
    },
  },
  colors: ["#10b981", "#3b82f6"], // green-500 and blue-500
  dataLabels: { enabled: false },
  stroke: { curve: "smooth" },
  //hide TOOLS
  tooltip: {
    theme: "dark", // ✅ dark background
    style: {
      fontSize: "14px",
      fontFamily: "Inter, sans-serif",
    },
    x: {
      formatter: (val) => `📅 ${new Date(val).toLocaleDateString()}`,
    },
    y: {
      formatter: (val) => `${val} users`,
      title: {
        formatter: (seriesName) => `${seriesName}:`, // ✅ label color inherits
      },
    },
  },
};

const series = [
  {
    name: "series1",
    data: [
      { x: new Date("2023-01-01").getTime(), y: 31 },
      { x: new Date("2023-01-02").getTime(), y: 40 },
      { x: new Date("2023-01-03").getTime(), y: 28 },
      { x: new Date("2023-01-04").getTime(), y: 51 },
      { x: new Date("2023-01-05").getTime(), y: 42 },
      { x: new Date("2023-01-06").getTime(), y: 109 },
      { x: new Date("2023-01-07").getTime(), y: 100 },
    ],
  },
  {
    name: "series2",
    data: [
      { x: new Date("2023-01-01").getTime(), y: 11 },
      { x: new Date("2023-01-02").getTime(), y: 32 },
      { x: new Date("2023-01-03").getTime(), y: 45 },
      { x: new Date("2023-01-04").getTime(), y: 32 },
      { x: new Date("2023-01-05").getTime(), y: 34 },
      { x: new Date("2023-01-06").getTime(), y: 52 },
      { x: new Date("2023-01-07").getTime(), y: 41 },
    ],
  },
];

export default function ApexChartDemo() {
  return (
    <div className=" border border-[#0f172a] p-2 text-slate-200 rounded-xl ">
      <ReactApexChart options={options} series={series} type="area" height={350} />
    </div>
  );
}
