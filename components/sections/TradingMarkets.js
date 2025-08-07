import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MarketChartOverview from '../plugins/MarketChartOverview'
import SectionTitle from '../titles/SectionTitle'

const TradingMarkets = () => {
  return (
    <div className="tradingMarkets bg-white">
      <Container>
        <Row>
          <Col xl={12}>
            <SectionTitle
              headingtitle="The Most Competitive Pricing, Guaranteed"
              headingSubTitle="Capitalize on the world’s most popular assets"
            ></SectionTitle>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <MarketChartOverview></MarketChartOverview>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TradingMarkets