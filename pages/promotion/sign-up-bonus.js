import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";
import BannerAnother from "../../components/banners/BannerAnother";
import Footer from "../../components/footer/Footer";
import PaymentMethod from "../../components/sections/PaymentMethod";
import Review from "../../components/sections/Review";
import StepsCardAnother from "../../components/sections/StepsCardAnother";
import SectionTitleFlip from "../../components/titles/SectionTitleFlip";
import Gold from "../../public/img/gold.png";
import Money from "../../public/img/money.png";
import { trackPixel } from "../../utils/trackPixel";

export default function SignUpBonus() {
  const signUpBonus = () => {
      trackPixel("Lead", { accountType: "Live" });
    };
  return (
    <div>
      <Head>
        <title>Signup Bonus | UITFX Markets</title>
        <meta
          name="description"
          content="UITFX Markets is a global forex, commodities, stocks brokers to provide the clients best trading experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BannerAnother
          title="Up to $100 Sign Up Bonus"
          subtitle="Create an account and Get your Sign-Up Bonus!"
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
                    <span>sign up bonus</span>
                    <h2>Sign Up Bonus</h2>
                    <p>
                      Bonuses are loved by all! Get a welcome bonus when you
                      sign up with UIT FX Market, which will be credited to your
                      trading account in one business day. It's the ideal boost
                      to begin trading with confidence and is available for all
                      account types.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="ProfitableSteps pt-5">
          <Container>
            <Row>
              <Col xxl={12} className="text-center">
                <SectionTitleFlip headingtitle="How to get the Sign Up bonus"></SectionTitleFlip>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xxl={7}>
                <StepsCardAnother></StepsCardAnother>
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

        <div className="ShapeBackground PammInvestor">
          <div className="ShapeWrapperBox">
            <Container>
              <Row className="align-items-center">
                <Col lg={6}>
                  <div>
                    <Image src={Gold} alt="Profile" priority={true}></Image>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="SectionTitleFlip">
                    <span>Sign-up bonus</span>
                    <h2>Perks of Sign-up bonus</h2>
                    <ul>
                      <li>
                        1. Add more money to your account and begin trading.
                      </li>
                      <li>
                        2. Gain confidence by taking no risks while exploring
                        the market.
                      </li>
                      <li>
                        3. Ideal for novices to test tactics without having to
                        worry about money.
                      </li>
                      <li>
                        4. Ideal for novices to test tactics without having to
                        worry about money.
                      </li>
                      <li>
                        5. After signing up, the bonus will be credited within
                        one business day.
                      </li>
                      <li>6. accessible for every kind of trading account.</li>
                      <li>
                        7. Invest more money to increase your trading potential.
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <PaymentMethod></PaymentMethod>

        <Review></Review>
        <Footer></Footer>
      </main>
    </div>
  );
}
