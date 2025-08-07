import Image from 'next/image'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import companyIcon1 from '../../public/img/companyIcon1.png'
import companyIcon2 from '../../public/img/companyIcon2.png'
import companyIcon3 from '../../public/img/companyIcon3.png'
import companyIcon4 from '../../public/img/companyIcon4.png'
import SectionTitleFlip from '../titles/SectionTitleFlip'
const AboutCompany = () => {
    const cardInfo =[
        {
            image: companyIcon1, title: 'Complete Transparency'
        },
        {
            image: companyIcon2, title: 'Simply Intuitive'
        },
        {
            image: companyIcon3, title: 'Trader Centric'
        },
        {
            image: companyIcon4, title: 'Ultra-fast execution'
        }
    ]
  return (
    <div className="about-company bg-white">
      <span className="bubbles-1"></span>
      <span className="bubbles-2"></span>
      <span className="bubbles-3"></span>
      <Container>
        <Row>
          <Col xxl={12} className="text-center">
            <SectionTitleFlip headingtitle="Our Values"></SectionTitleFlip>
          </Col>
        </Row>
        <Row>
          <Col xxl={12}>
            <div className="about-company-card">
              {cardInfo.map((card, index) => {
                return (
                  <Card key={index}>
                    <Card.Body>
                      <div className="card-image">
                        <Image
                          priority={true}
                          src={card.image}
                          alt="Company Icon"
                        ></Image>
                      </div>
                      <div className="card-details">
                        <span>{card.title}</span>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutCompany