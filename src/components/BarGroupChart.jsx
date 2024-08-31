import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "../components/BarGroupChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const BarGroupChart = ({ Outcome, ECT, IF, SS, DL, GP }) => {
  const data = {
    labels: ["Outcome", "ECT", "IF & SE", "SS & CP", "DL", "GP"],
    datasets: [
      {
        data: [Outcome, ECT, IF, SS, DL, GP],
        backgroundColor: "#F0527F",
        borderRadius: 5,
        barPercentage: 2, // Bar Width
        categoryPercentage: 0.3, // Space between bars
      },
    ],
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        display: false,
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "black",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: "end",
        align: "end",
        color: "black",
        font: {
          weight: "bold",
        },
        formatter: (value) => {
          return value !== 0 ? value : "";
        },
      },
    },
    layout: {
      padding: {
        right: 40,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="group-bar">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGroupChart;
