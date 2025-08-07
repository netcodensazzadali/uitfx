import Image from "next/image";
import { Card, Col, Row } from "react-bootstrap";
import WebPlatform from "../../public/img/web.png";
import { trackPixel } from "../../utils/trackPixel";

const WebPlatformDetails = () => {
  
   const WebLiveAccount = () => {
     trackPixel("Lead", { accountType: "Demo" });
   };
  return (
    <div className="WebPlatformDetails">
      <Row className="align-items-center flex-column-reverse flex-lg-row">
        <Col lg={7} xl={6}>
          <div className="pageTitle">
            <Card className="bg-transparent border-0">
              <Card.Body>
                <Card.Subtitle>MetaTrader 5 Web-platform</Card.Subtitle>
                <Card.Text>
                  UITFX MT5 platform provides clients with an award-winning
                  solution for trading a wide range of markets instantly in web
                  browser. Once web portal is open, select either the Demo or
                  Real server based on your account type. Enter the credentials
                  and you’re now ready to trade.
                </Card.Text>
                <Card.Link
                  href="#"
                  className="GlobalBtn"
                >
                  Open Web Trader
                </Card.Link>
                <Card.Link
                  href="https://my.uitfx.com/create-account"
                  className="GlobalBtn GlobalBtnOutline"
                  onClick={WebLiveAccount}
                  target="_blank"
                >
                  Create Live Account
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col lg={5} xl={6}>
          <div className="text-center text-lg-left">
            <Image src={WebPlatform} alt="Web Platform"></Image>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WebPlatformDetails;
