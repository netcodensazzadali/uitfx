import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";
import BannerAnother from "../../components/banners/BannerAnother";
import Footer from "../../components/footer/Footer";
import Offer from "../../components/sections/Offer";
import PaymentMethod from "../../components/sections/PaymentMethod";
import Review from "../../components/sections/Review";
import StepsCard from "../../components/sections/StepsCard";
import SectionTitleFlip from "../../components/titles/SectionTitleFlip";
import Money from "../../public/img/money.png";
import { trackPixel } from "../../utils/trackPixel";
export default function NoDepositBonus() {
  const signUpBonus = () => {
    trackPixel("Lead", { accountType: "Live" });
  };
  return (
    <div>
      <Head>
        <title>No Deposit Bonus | UITFX Markets </title>
        <meta
          name="description"
          content="UITFX Markets is a global forex, commodities, stocks brokers to provide the clients best trading experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BannerAnother
          title="$10 No Deposit Bonus"
          subtitle="No Deposit Bonus is a very unique promotion that gives new traders free funds to start trading without any initial deposit. 
UITFX is putting funds to your account & letting you make live trades while you experience risk-free real market conditions. "
          linkText="Get Bonus Now"
        ></BannerAnother>

        <div className="ShapeBackground PammInvestor">
          <div className="ShapeWrapperBox">
            <Container>
              <Row className="align-items-center">
                <Col lg={6}>
                  <div>
                    <Image src={Money} alt="Calculator" priority={true}></Image>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="SectionTitleFlip">
                    <span>no deposit bonus</span>
                    <h2>Perks & Conditions</h2>
                    <ul className="ms-3" style={{ listStyleType: "square" }}>
                      <li>It’s absolutely free. </li>
                      <li>Just Sign in and Get Bonus, It’s Hassle Free. </li>
                      <li>
                        Be a verified client of UITFX with a real account. 
                      </li>
                      <li>
                        Account should be maintained with us for 30 days. 
                      </li>
                      <li>Minimum withdrawal is 25 USD. </li>
                      <li>Get leverage up to 200</li>
                      <li>Withdraw Up to 10X from Your Bonus Profit.</li>
                      <li>This bonus can't be use for internal transfer. </li>
                      <li>
                        Withdrawals are available through our payment methods. 
                      </li>
                      <li>
                        Every household, IP address, or device is only eligible
                        for one bonus.
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <Offer></Offer>
        

        <div className="ProfitableSteps pt-5">
          <Container>
            <Row>
              <Col xxl={12} className="text-center">
                <SectionTitleFlip
                  headingSubTitle="No Deposit Bonus"
                  headingtitle="How to get the No-Deposit Bonus"
                ></SectionTitleFlip>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xxl={7}>
                <StepsCard></StepsCard>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="which-one WhichOneOther">
          <Container>
            <Row>
              <Col xxl={12}>
                <Card>
                  <Card.Body>
                    <h1>Not registered with us yet ?</h1>
                    <p>Claim your bonus & start your trading</p>
                    <Card.Text className="banner-links">
                      <Link
                        href="https://my.uitfx.com/create-account"
                        legacyBehavior
                        className="mr-3 d-block"
                      >
                        <a onClick={signUpBonus} target="_blank">
                          open a live account
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

        <PaymentMethod></PaymentMethod>

        <Review></Review>
        <Footer></Footer>
      </main>
    </div>
  );
}
