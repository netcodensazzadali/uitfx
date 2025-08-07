import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AccordionWrapper from '../collapse/AccordionWrapper';
import SectionTitleFlip from '../titles/SectionTitleFlip';


const Faq = () => {
  return (
    <div className="faq">
      <Container fluid="xxl">
        <Row className="justify-content-center">
          <Col xxl={9} xl={10} className="text-center mb-3">
            <SectionTitleFlip
              headingSubTitle="FAQ"
              headingtitle="You have the questions, we have the answers"
            ></SectionTitleFlip>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xxl={8} xl={10}>
            <AccordionWrapper></AccordionWrapper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Faq