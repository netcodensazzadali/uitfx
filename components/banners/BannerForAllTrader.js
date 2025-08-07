import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Bubbles from "../animation/Bubbles";

const BannerForAllTraders = () => {
  return (
    <div className="banner-section-wrapper bubbles-wrapper banner-all-section">
      <Container fluid="xxl">
        <Row className="banner-section">
          <Col xxl={12}>
            <div className="banner-title">
              <Card className="bg-transparent border-0">
                <Card.Body>
                  <Card.Title>All Traders</Card.Title>
                  <Card.Subtitle>
                    Here you can see all copy trade providers
                  </Card.Subtitle>
                  
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

export default BannerForAllTraders;
