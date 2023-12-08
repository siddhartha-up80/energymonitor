//@ts-nocheck
"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";

const EnergyGraph = ({ energyData }) => {
  const chartData = {
    series: [
      {
        name: "Voltage", // You can change the metric name here
        data: energyData.map((entry) => parseInt(entry.voltage)),
        // Add similar entries for other metrics (current, power, energy) if needed
      },
      {
        name: "Current", // You can change the metric name here
        data: energyData.map((entry) => parseInt(entry.current)),
        // Add similar entries for other metrics (current, power, energy) if needed
      },
      {
        name: "Power", // You can change the metric name here
        data: energyData.map((entry) => parseInt(entry.power)),
        // Add similar entries for other metrics (current, power, energy) if needed
      },
      {
        name: "Energy", // You can change the metric name here
        data: energyData.map((entry) => parseInt(entry.energy)),
        // Add similar entries for other metrics (current, power, energy) if needed
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Energy Data from esp32",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: energyData.map((entry) => entry.time),
      },
    },
  };

  return (
    <div id="chart" className="min-w-[60vw]">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default EnergyGraph;
