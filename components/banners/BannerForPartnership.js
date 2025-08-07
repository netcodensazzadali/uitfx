import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { trackPixel } from '../../utils/trackPixel';
import Bubbles from "../animation/Bubbles";

const BannerForPartnership = () => {
  const becomeAnIbBanner = () => {
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
                  <Card.Title>Introducing Broker (IB)</Card.Title>
                  <Card.Subtitle>
                    Compelling Commission Plan for Maximizing Your Earning
                    Potential
                  </Card.Subtitle>
                  <Card.Link
                    href="https://my.uitfx.com/profile-view"
                    className="GlobalBtn px-5"
                    onClick={becomeAnIbBanner}
                    target="_blank"
                  >
                    Become an IB
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

export default BannerForPartnership;
