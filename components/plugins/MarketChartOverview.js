import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const TradingViewWidget = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((mod) => mod.TradingViewWidget),
  { ssr: false }
);

const MarketOverview = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((mod) => mod.MarketOverview),
  { ssr: false }
);

const MarketChartOverview = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="market-chart">
      <Card className="border-0 shadow">
        <Card.Body>
          <MarketOverview
            colorTheme="light"
            isTransparent="true"
            width="100%"
            showFloatingTooltip
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MarketChartOverview;
