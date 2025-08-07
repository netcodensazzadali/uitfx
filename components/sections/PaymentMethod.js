import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CarouselPaymentSlider from '../slider/CarouselPaymentSlider';
import SectionTitleFlip from '../titles/SectionTitleFlip';



const PaymentMethod = () => {
   
  return (
    <div className="payment-method bg-white">
      <Container fluid="xxl">
        <Row>
          <Col xl={12} className="text-center mb-5">
            <SectionTitleFlip
              headingSubTitle="Multiple payment choices for a hassle-free trading experience"
              headingtitle="Our Payment Methods "
            ></SectionTitleFlip>
          </Col>
        </Row>
        <Row className="justify-content-center pb-sm-3 pb-md-5">
          <Col xl={12}>
            <CarouselPaymentSlider></CarouselPaymentSlider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PaymentMethod