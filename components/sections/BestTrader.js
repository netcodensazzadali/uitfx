import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CarouselSlider from '../slider/CarouselSlider';
import SectionTitleFlip from '../titles/SectionTitleFlip';



const BestTrader = () => {
    
  return (
    <div className='best-trader'>
        <Container>
            <Row>
                <Col xl={12}>
                    <SectionTitleFlip headingSubTitle="Our platforms" headingtitle="Best Traders"></SectionTitleFlip>
                </Col>
            </Row>
            <Row>
                <Col xl={12} className='px-0'>
                    <CarouselSlider></CarouselSlider>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default BestTrader