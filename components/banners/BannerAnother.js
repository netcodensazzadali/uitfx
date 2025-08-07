import { Card, Col, Container, Row } from 'react-bootstrap';
import { trackPixel } from "../../utils/trackPixel";
import Bubbles from '../animation/Bubbles';
 
const BannerAnother = (props) => { 
  const openYourAccount = () => {
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
                  <Card.Title>{props.title}</Card.Title>
                  <Card.Subtitle>{props.subtitle}</Card.Subtitle>
                  <Card.Link
                    href="https://my.uitfx.com/"
                    className="GlobalBtn px-5"
                    onClick={openYourAccount}
                    target="_blank"
                  >
                    {props.linkText}
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
}

export default BannerAnother