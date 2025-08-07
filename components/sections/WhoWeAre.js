import Image from "next/image";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import businessWomen from "../../public/img/businesswomen.png";
import SectionTitleOthers from "../titles/SectionTitleOthers";

const WhoWeAre = () => {
  return (
    <div className="WhoWeAre">
      <span className="BubbleOne"></span>
      <span className="BubbleTwo"></span>
      <Container>
        <Row className="align-items-center Shape">
          <Col md={6} sm={12} xs={12}>
            <div>
              <Image
                width={500}
                priority={true}
                layout="responsive"
                src={businessWomen}
                alt="Business Women"
              ></Image>
            </div>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Card>
              <SectionTitleOthers
                headingSubTitle="about"
                headingTitle="Who we are?"
                details="UITFX is a global, multi-asset broker offering clients access to the financial market for Forex, Commodities, Stocks, Indices, and Crypto trading. We provide the best support to help our clients via an ideal trading environment."
              ></SectionTitleOthers>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default WhoWeAre;
