"use client";

import dynamic from "next/dynamic";

// Dynamically import the TradingView widget with SSR disabled
const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then(
      (mod) => mod.AdvancedRealTimeChart
    ),
  {
    ssr: false,
    loading: () => <p>Loading chart...</p>,
  }
);

const RealTimeChart = () => {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
        Advanced Real-Time Chart
      </h3>
      <AdvancedRealTimeChart theme="light" width="100%" height={500} />
    </div>
  );
};

export default RealTimeChart;
