import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Options from '../sections/Options'
import SectionTitle from '../titles/SectionTitle'

const TradingOption = () => {
  return (
    <div className="trading-option">
      <Container>
        <Row>
          <Col xl={12}>
            <SectionTitle
              headingtitle="Our Trading Instruments"
              headingSubTitle="Trade & capitalize on the best instruments in the market"
            ></SectionTitle>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <Options></Options>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TradingOption