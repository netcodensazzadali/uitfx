import Image from "next/image";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import arrows from "../../public/img/arrows.png";
import SectionTitleOthers from "../titles/SectionTitleOthers";

const Mission = () => {
  return (
    <div className="Mission WhoWeAre">
      <Container>
        <Row className="align-items-center Shape">
          <Col md={6} sm={12} xs={12}>
            <Card>
              <SectionTitleOthers
                headingTitle="Our Mission"
                details="To offer traders an optimal environment and a cutting-edge platform, enabling them to trade at their full potential."
              ></SectionTitleOthers>
            </Card>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <div>
              <Image
                width={500}
                priority={true}
                layout="responsive"
                src={arrows}
                alt="Arrow"
              ></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Mission;
