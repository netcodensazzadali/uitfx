import Image from "next/image";
import { Card, Col, Row } from "react-bootstrap";
import AndroidPlatform from "../../public/img/android.png";
import { trackPixel } from "../../utils/trackPixel";

const AndroidPlatformDetails = () => {
  const AndroidLiveAccount = () => {
         trackPixel("Lead", { accountType: "Demo" });
       };
  return (
    <div className="WebPlatformDetails">
      <Row className="align-items-center flex-column-reverse flex-lg-row">
        <Col lg={7} xl={6}>
          <div className="pageTitle">
            <Card className="bg-transparent border-0">
              <Card.Body>
                <Card.Subtitle>MetaTrader 5 Android</Card.Subtitle>
                <Card.Text>
                  Open Play Store and search for ‘MetaTrader 5’. Once installed,
                  press the ‘plus’ button on the top bar, click ‘Login to an
                  existing account’, search for ‘UIT FX’ in the search bar and
                  select either the Demo or Real server based on your account
                  type. Enter the credentials and you’re now ready to trade.
                  <br></br>
                  Once you’ve signed up to UIT FX, you’ll have the credentials
                  required to start trading on your mobile device.
                </Card.Text>
                <Card.Link href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4" target="_blank" className="GlobalBtn">
                  Download
                </Card.Link>
                <Card.Link
                  href="https://my.uitfx.com/create-account"
                  className="GlobalBtn GlobalBtnOutline"
                  onClick={AndroidLiveAccount}
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
            <Image src={AndroidPlatform} alt="Android Platform"></Image>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AndroidPlatformDetails;
