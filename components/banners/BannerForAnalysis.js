import { Card, Col, Container, Row } from "react-bootstrap";
import { trackPixel } from "../../utils/trackPixel";
import Bubbles from "../animation/Bubbles";

const BannerForAnalysis = () => {
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
                  <Card.Title>Tools & Analysis</Card.Title>
                  <Card.Subtitle>
                    Enjoy tassel-free & transparent investment & copy trading
                  </Card.Subtitle>
                  <Card.Link
                    href="https://my.uitfx.com/create-account"
                    className="GlobalBtn"
                    onClick={openYourAccount}
                    target="_blank"
                  >
                    Open Live Account
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

export default BannerForAnalysis;
