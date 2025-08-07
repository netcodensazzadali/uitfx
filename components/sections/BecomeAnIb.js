import Link from 'next/link';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { trackPixel } from '../../utils/trackPixel';

const BecomeAnIb = (props) => {
  const becomeManager = () => {
      trackPixel("Lead", { accountType: "Live" });
    };
  return (
    <div className="which-one WhichOneOther">
      <Container fluid="xxl">
        <Row>
          <Col xxl={12}>
            <Card>
              <Card.Body>
                <h1>
                  {props.title} <span className="small-round"></span>
                </h1>
                <p>{props.subtitle}</p>
                <Card.Text className="banner-links">
                  <Link
                    href="https://my.uitfx.com/profile-view"
                    className="mr-3 d-block"
                    legacyBehavior
                  >
                    <a onClick={becomeManager} target="_blank">
                      become an IB
                    </a>
                  </Link>
                </Card.Text>
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

export default BecomeAnIb;