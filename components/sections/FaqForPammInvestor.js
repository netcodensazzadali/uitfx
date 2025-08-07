import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AccordionWrapperPammInvestor from "../collapse/AccordionWrapperPammInvestor";
import SectionTitleFlip from "../titles/SectionTitleFlip";

const FaqForPammInvestor = () => {
  return (
    <div className="faq">
      <Container>
        <Row className="justify-content-center">
          <Col xl={7} className="text-center mb-3">
            <SectionTitleFlip
              headingSubTitle="FAQ"
              headingtitle="Frequently Asked Questions"
            ></SectionTitleFlip>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xxl={8} xl={10}>
            <AccordionWrapperPammInvestor></AccordionWrapperPammInvestor>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqForPammInvestor;
