import Link from 'next/link';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { trackPixel } from "../../utils/trackPixel";

const WhichOneOther = (props) => {
  const whichOneOpenYourAccount = () => {
      trackPixel("Lead", { accountType: "Live" });
    };
  
    const whichOneTryDemoAccount = () => {
      trackPixel("Lead", { accountType: "Demo" });
    };
  return (
    <div className="which-one WhichOneOther">
      <Container>
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
                    href="https://my.uitfx.com/create-account"
                    legacyBehavior
                  >
                    <a
                      className="mr-3 d-block"
                      onClick={whichOneOpenYourAccount}
                      target="_blank"
                    >
                      open your account
                    </a>
                  </Link>
                  <Link
                    href="https://my.uitfx.com/create-account"
                    legacyBehavior
                  >
                    <a onClick={whichOneTryDemoAccount} target="_blank">
                      try demo account
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
}

export default WhichOneOther