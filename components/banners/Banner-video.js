import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { trackPixel } from '../../utils/trackPixel';

const Banner = () => {
  const openYourAccount = () => {
     trackPixel("Lead", { accountType: "Live" });
   };
  
   const tryDemoAccount = () => {
     trackPixel("Lead", { accountType: "Demo" });
   };
  return (
    <div className="banner-slider-wrapper">
      <Container fluid className="px-0">
        <Carousel fade controls={false} indicators={false} interval={5000}>
          <Carousel.Item>
            <div className="video-slide">
              <video autoPlay loop muted className="w-100">
                <source src="/videos/trade-2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="overlay-content">
                <Row className="banner-section">
                  <Col md={12}>
                    <div className="pageTitle">
                      <Card className="bg-transparent border-0">
                        <Card.Body className="text-center">
                          <Card.Subtitle className="text-white">
                            Celebrate Winter <br></br>With UITFX
                          </Card.Subtitle>
                          <Card.Text className="text-center text-white">
                            Stay ahead this winter—trade smarter <br></br> with
                            the industry’s best broker
                          </Card.Text>
                          <Card.Text className="banner-links">
                            <Card.Link
                              href="https://my.uitfx.com/create-account"
                              className="GlobalBtn"
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
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="video-slide">
              <video autoPlay loop muted className="w-100">
                <source src="/videos/trade.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="overlay-content">
                <Row className="banner-section h-100">
                  <Col md={12}>
                    <div className="pageTitle">
                      <Card className="bg-transparent border-0">
                        <Card.Body className="text-center">
                          <Card.Subtitle className="text-white">
                            Trade Smarter
                            <br></br>With UITFX
                          </Card.Subtitle>
                          <Card.Text className="text-center text-white">
                            Upgrade your trading experience <br /> With the
                            leading trading broker
                          </Card.Text>
                          <Card.Text className="banner-links">
                            <Card.Link
                              href="https://my.uitfx.com/create-account"
                              className="GlobalBtn"
                            >
                              Open Your Account
                            </Card.Link>
                            <Card.Link
                              href="https://my.uitfx.com/create-account"
                              className="GlobalBtn GlobalBtnOutline"
                            >
                              Try Demo Account
                            </Card.Link>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Banner;
