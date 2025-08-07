import { Card, Col, Container, Row } from "react-bootstrap";
import { trackPixel } from "../../utils/trackPixel";
import Bubbles from "../animation/Bubbles";

const BannerForPlatform = () => {
  const openYourAccount = () => {
     trackPixel("Lead", { accountType: "Live" });
   };
  
   const tryDemoAccount = () => {
     trackPixel("Lead", { accountType: "Demo" });
   };
  return (
    <div className="banner-section-wrapper bubbles-wrapper banner-all-section">
      <Container fluid="xxl">
        <Row className="banner-section">
          <Col xxl={12}>
            <div className="banner-title">
              <Card className="bg-transparent border-0">
                <Card.Body>
                  <Card.Title>Metatrader 5</Card.Title>
                  <Card.Subtitle>
                    Enjoy multi-asset trading on a smart platform. <br></br>
                    Trade from anywhere and anytime on UIT FX MT5 platform
                  </Card.Subtitle>
                  <Card.Link
                    href="https://my.uitfx.com/create-account"
                    className="GlobalBtn me-2 me-md-0"
                    onClick={openYourAccount}
                    target="_blank"
                  >
                    Open Your Account
                  </Card.Link>

                  <Card.Link
                    href="https://my.uitfx.com/create-account"
                    className="GlobalBtn GlobalBtnOutline"
                    onClick={tryDemoAccount}
                    target="_blank"
                  >
                    Try Demo Account
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

export default BannerForPlatform;
