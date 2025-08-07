"use client";

import dynamic from "next/dynamic";

// Dynamically import the Screener widget with SSR disabled
const Screener = dynamic(
  () => import("react-ts-tradingview-widgets").then((mod) => mod.Screener),
  { ssr: false, loading: () => <p>Loading Market Screener...</p> }
);

const ScreenerWidget = () => {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
        Market Screener Widget
      </h3>
      <Screener colorTheme="light" width="100%" height="500" />
    </div>
  );
};

export default ScreenerWidget;
