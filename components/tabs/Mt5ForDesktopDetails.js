import Image from 'next/image';
import { Card, Col, Row } from 'react-bootstrap';
import Mt5 from '../../public/img/mt5.png';
import { trackPixel } from "../../utils/trackPixel";

const Mt5ForDesktopDetails = () => {
    
     const mt5LiveAccount = () => {
       trackPixel("Lead", { accountType: "Demo" });
     };
  return (
    <div className="WebPlatformDetails">
      <Row className="align-items-center flex-column-reverse flex-lg-row">
        <Col lg={7} xl={6}>
          <div className="pageTitle">
            <Card className="bg-transparent border-0">
              <Card.Body>
                <Card.Subtitle>MetaTrader 5 Desktop</Card.Subtitle>
                <Card.Text>
                  Download the most advanced trading platform, run the program
                  and follow the prompts on screen to complete the installation.
                  Once the program is running, select either the Demo or Real
                  server based on your account type. Enter the credentials and
                  you’re now ready to trade.
                </Card.Text>
                <Card.Link
                  href="https://download.mql5.com/cdn/web/united.international.trading/mt5/unitedinternationaltrading5setup.exe"
                  target="_blank"
                  className="GlobalBtn"
                >
                  Download
                </Card.Link>
                <Card.Link
                  href="https://my.uitfx.com/create-account"
                  className="GlobalBtn GlobalBtnOutline"
                  onClick={mt5LiveAccount}
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
            <Image src={Mt5} alt="MT5 Platform"></Image>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Mt5ForDesktopDetails