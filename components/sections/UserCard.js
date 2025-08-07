import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UserCard = ({
  image,
  name,
  username,
  returnPercentage,
  copiers,
  chartData,
}) => {
  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false, // Hide x-axis labels
      },
      y: {
        display: false, // Hide y-axis labels
      },
    },
  };

  return (
    <div className="user-card">
      <div className="user-image">
        <img src={image} alt={`${name}'s profile`} />
      </div>
      <div className="user-details">
        <h3 className="user-name">{name}</h3>
        <p className="user-username mb-0">@{username}</p>
      </div>
      <div className="chart">
        <Line data={chartData} options={options} />
      </div>
      <div className="user-stats d-flex justify-content-between align-items-center">
        <p
          className="return mb-0"
          style={{ color: returnPercentage > 0 ? "#009E3C" : "red" }}
        >
          {returnPercentage > 0 ? "+" : ""}
          {returnPercentage}%<span>Return (2M)</span>
        </p>
        <p className="copiers mb-0">
          {copiers} <span>Copiers</span>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
