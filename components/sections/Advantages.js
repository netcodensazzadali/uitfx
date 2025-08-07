import Image from 'next/image'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import clientSupport from '../../public/img/client-support.gif'
import Leverage from '../../public/img/leverage.gif'
import lowCommission from '../../public/img/low-commission.gif'
import lowSpread from '../../public/img/low-spread.gif'
import SectionTitleFlip from '../titles/SectionTitleFlip'

const Advantages = () => {
    const cardInfo = [
      {
        image: lowCommission,
        title: "Fast Execution",
        subTitle: "Zero Slippage",
      },
      {
        image: lowSpread,
        title: "Low Spread",
        subTitle: "Starts from 0.1 pips",
      },
      {
        image: Leverage,
        title: "Leverage",
        subTitle: "Up to 1: 500",
      },
      {
        image: clientSupport,
        title: "Support",
        subTitle: "24/7 dedicated support",
      },
    ];
  return (
    <div className="advantages bg-white">
      <Container>
        <Row className="mb-5">
          <Col xl={12} className="text-center">
            <SectionTitleFlip
              headingtitle="Your efforts deserve the best"
              headingSubTitle="Our Advantages"
            ></SectionTitleFlip>
          </Col>
        </Row>
        <Row className="pt-3">
          {cardInfo.map((card, index) => {
            return (
              <Col
                className="advantage-listing"
                xl={3}
                lg={6}
                md={6}
                sm={6}
                key={index}
              >
                <Card className="advantage-card">
                  <Card.Body>
                    <div className="card-image">
                      <Image
                        layout="intrinsic"
                        src={card.image}
                        alt="bitcoin"
                      ></Image>
                    </div>
                    <div className="content">
                      <h1>{card.title}</h1>
                      <p>{card.subTitle}</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Advantages