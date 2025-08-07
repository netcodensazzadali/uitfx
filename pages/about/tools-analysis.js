import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import BannerForAnalysis from "../../components/banners/BannerForAnalysis";
import Footer from "../../components/footer/Footer";
import CurrencyConverter from "../../components/sections/CurrencyConverter";
import PaymentMethod from "../../components/sections/PaymentMethod";
import PipCalculator from "../../components/sections/PipCalculator";
import RealTimeChart from "../../components/sections/RealTimeChart";
import Review from "../../components/sections/Review";
import ScreenerWidget from "../../components/sections/ScreenerWidget";
import ToolsAnalysis from "../../components/sections/ToolsAnalysis";

// ✅ Dynamically import EconomicCalendar with SSR disabled
const EconomicCalendar = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((mod) => mod.EconomicCalendar),
  { ssr: false }
);

export default function CopyTrade() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <Head>
        <title>Tools & Analysis | UITFX Markets</title>
        <meta
          name="description"
          content="UITFX Markets is a global forex, commodities, stocks brokers to provide the clients best trading experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BannerForAnalysis />
        <ToolsAnalysis />

        <div className="CommissionChart">
          <div className="CommissionChartWrapper">
            {/* Economic Calendar */}
            {isClient && (
              <Container fluid="xxl">
                <Row>
                  <Col xxl={12}>
                    <div className="SectionTitleFlip SectionTitle text-center">
                      <span>from best traders</span>
                      <h2>Economic Calendar</h2>
                    </div>
                  </Col>
                </Row>
                <div id="Calendar">
                  <Row>
                    <Col xxl={12}>
                      <EconomicCalendar colorTheme="light" width="100%" />
                    </Col>
                  </Row>
                </div>
              </Container>
            )}

            {/* PIP Calculator */}
            <Container fluid="xxl">
              <Row>
                <Col xxl={12}>
                  <div className="SectionTitleFlip SectionTitle text-center">
                    <span>from best traders</span>
                    <h2>PIP Calculator</h2>
                  </div>
                </Col>
              </Row>
              <div id="pipCalculator">
                <Row>
                  <Col xxl={12}>
                    <PipCalculator />
                  </Col>
                </Row>
              </div>
            </Container>

            {/* Currency Converter */}
            <Container fluid="xxl">
              <Row>
                <Col xxl={12}>
                  <div className="SectionTitleFlip SectionTitle text-center">
                    <span>from best traders</span>
                    <h2>Currency Converter</h2>
                  </div>
                </Col>
              </Row>
              <div id="CurrencyConverter">
                <Row>
                  <Col xxl={12}>
                    <CurrencyConverter />
                  </Col>
                </Row>
              </div>
            </Container>

            {/* Market Research */}
            <Container fluid="xxl">
              <Row>
                <Col xxl={12}>
                  <div className="SectionTitleFlip SectionTitle text-center">
                    <span>from best traders</span>
                    <h2>Market Research</h2>
                  </div>
                </Col>
              </Row>
              <div id="MarketResearch">
                <Row>
                  <Col xxl={12}>
                    <ScreenerWidget />
                  </Col>
                </Row>
              </div>
            </Container>

            {/* Trading Hours */}
            <Container fluid="xxl">
              <Row>
                <Col xxl={12}>
                  <div className="SectionTitleFlip SectionTitle text-center">
                    <span>from best traders</span>
                    <h2>Trading Hours</h2>
                  </div>
                </Col>
              </Row>
              <div id="TradingHours">
                <Row>
                  <Col xxl={12}>
                    <RealTimeChart />
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>

        <PaymentMethod />
        <Review />
        <Footer />
      </main>
    </div>
  );
}
