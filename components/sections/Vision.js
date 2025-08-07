import Image from "next/image";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import tripod from "../../public/img/tripod.png";
import SectionTitleOthers from "../titles/SectionTitleOthers";

const Vision = () => {
  return (
    <div className="WhoWeAre Vision">
      <Container>
        <Row className="align-items-center Shape">
          <Col md={6} sm={12} xs={12}>
            <div>
              <Image
                width={500}
                priority={true}
                layout="responsive"
                src={tripod}
                alt="Business Women"
              ></Image>
            </div>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Card>
              <SectionTitleOthers
                headingTitle="Our Vision"
                details="We strive to be the leading trading broker where our clients can thrive, with access to advanced tools, diverse markets, and unmatched support, enabling them to reach their fullest potential."
              ></SectionTitleOthers>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Vision;
