import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "../components/OverallChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const OverallChart = ({ OverallCount }) => {
  const data = {
    datasets: [
      {
        data: [
          (OverallCount / 6).toFixed(1),
          (100 - OverallCount / 6).toFixed(1),
        ],
        backgroundColor: ["#F0527F", "#171C28"],
        borderWidth: 0,
        cutout: "80%",
      },
    ],
  };

  return (
    <div className="overall-chart">
      <Doughnut data={data} />

      <div className="donut-text">
        <h2 className="count-text">{OverallCount}</h2>
        <p className="desc-text">Overall (out of 600)</p>
      </div>
    </div>
  );
};

export default OverallChart;
