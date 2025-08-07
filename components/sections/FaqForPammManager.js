import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AccordionWrapperPammManager from "../collapse/AccordionWrapperPammManager";
import SectionTitleFlip from "../titles/SectionTitleFlip";

const FaqForPammManager = () => {
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
            <AccordionWrapperPammManager></AccordionWrapperPammManager>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqForPammManager;
