import { useEffect, useRef } from "react";

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure DOM is ready before embedding the TradingView script
    if (!containerRef.current) return;

    // Create a script element dynamically for the TradingView widget
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;

    // Widget configuration
    script.innerHTML = JSON.stringify({
      feedMode: "market",
      market: "forex",
      colorTheme: "light",
      width: "100%",
      height: "400",
    });

    // Append the script to the container
    containerRef.current.appendChild(script);

    return () => {
      // Cleanup: Remove the script when the component unmounts
      containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div>
      <div ref={containerRef} style={{ width: "100%", height: "500px" }} />
    </div>
  );
};

export default TradingViewWidget;
