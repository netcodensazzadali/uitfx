import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { trackPixel } from "../../utils/trackPixel";
import Bubbles from "../animation/Bubbles";

const BannerForPamInvestor = () => {
  const pammInvestButton = () => {
     trackPixel("Lead", { accountType: "Live" });
   };
  return (
    <div className="banner-section-wrapper bubbles-wrapper banner-all-section">
      <Container fluid="xxl">
        <Row className="banner-section">
          <Col xxl={12}>
            <div className="banner-title">
              <Card className="bg-transparent border-0">
                <Card.Body>
                  <Card.Title>PAMM (Investor)</Card.Title>
                  <Card.Subtitle>
                    Invest with UITFX
                    <br></br> A minimalist's way to become profitable with
                    minimum time & effort.
                  </Card.Subtitle>
                  <Card.Link
                    href="https://my.uitfx.com/create-investor-account"
                    className="GlobalBtn px-5"
                    onClick={pammInvestButton}
                    target="_blank"
                  >
                    invest now
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      <Bubbles></Bubbles>
    </div>
  );
};

export default BannerForPamInvestor;
