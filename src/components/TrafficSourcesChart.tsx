"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// ✅ Load only on client (avoid SSR issues)
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TrafficSourcesChart: React.FC = () => {
  const series = [
    {
      name: "Website Blog",
      type: "column",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: "Social Media",
      type: "line",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "line",
      height: 350,
      background: "#0f172a", // ✅ dark theme
      foreColor: "#d1d5db", // Tailwind gray-300 for text
      toolbar: { show: false },
    },
    stroke: {
      width: [0, 4],
    },
    title: {
      text: "Traffic Sources",
      style: { color: "#f9fafb" }, // light text
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1], // show only on line series
      style: { colors: ["#f9fafb"] },
    },
    labels: [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001",
    ],
    yaxis: [
      {
        title: {
          text: "Website Blog",
          style: { color: "#93c5fd" }, // blue
        },
        labels: {
          style: { colors: "#9ca3af" }, // gray-400
        },
      },
      {
        opposite: true,
        title: {
          text: "Social Media",
          style: { color: "#f87171" }, // red
        },
        labels: {
          style: { colors: "#9ca3af" },
        },
      },
    ],
    grid: {
      borderColor: "#374151", // gray-700
      strokeDashArray: 4,
    },
    tooltip: {
      theme: "dark",
    },
    legend: {
      labels: { colors: "#e5e7eb" }, // legend text
    },
  };

  return (
    <div className="bg-[#0f172a] p-2 rounded-xl">
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default TrafficSourcesChart;
