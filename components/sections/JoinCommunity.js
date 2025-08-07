import Link from "next/link";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { trackPixel } from "../../utils/trackPixel";

const JoinCommunity = () => {
  const becomeManager = () => {
      trackPixel("Lead", { accountType: "Live" });
    };
  return (
    <div className="which-one WhichOneOther">
      <Container>
        <Row>
          <Col xxl={12}>
            <Card>
              <Card.Body>
                <h1>
                  Join Community <span className="small-round"></span>
                </h1>
                <p>
                  Ready to join the UITFX Markets Strategy Manager Community?
                </p>
                
                <Link
                  href="https://my.uitfx.com/create-manager-account"
                  legacyBehavior
                >
                  <a onClick={becomeManager} target="_blank">
                    Become a strategy manager
                  </a>
                </Link>
                <span className="medium-round"></span>
                <span className="large-round"></span>
                <span className="rectangle"></span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JoinCommunity;
