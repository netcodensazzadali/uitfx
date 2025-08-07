import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";
import Bubbles from "../../components/animation/Bubbles";
import Footer from "../../components/footer/Footer";
import BestTrader from "../../components/sections/BestTrader";
import FaqForPammManager from "../../components/sections/FaqForPammManager";
import JoinCommunity from "../../components/sections/JoinCommunity";
import PammCardAnother from "../../components/sections/PammCardAnother";
import PaymentMethod from "../../components/sections/PaymentMethod";
import Review from "../../components/sections/Review";
import SectionTitleFlip from "../../components/titles/SectionTitleFlip";
import SectionTitleFlipListing from "../../components/titles/SectionTitleFlipListing";
import Chess from "../../public/img/chess.png";
import Profile from "../../public/img/profile.png";
import { trackPixel } from "../../utils/trackPixel";

export default function PammManager() {
  const ManageNow = () => {
      trackPixel("Lead", { accountType: "Live" });
    };
    const ManageNowAnother = () => {
      trackPixel("Lead", { accountType: "Live" });
    };
     const createManagerAccount = () => {
       trackPixel("Lead", { accountType: "Live" });
     };
  return (
    <div>
      <Head>
        <title>PAMM Manager | UITFX Markets</title>
        <meta
          name="description"
          content="UITFX Markets is a global forex, commodities, stocks brokers to provide the clients best trading experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="banner-section-wrapper bubbles-wrapper banner-all-section">
          <Container fluid="xxl">
            <Row className="banner-section">
              <Col xxl={12}>
                <div className="banner-title">
                  <Card className="bg-transparent border-0">
                    <Card.Body>
                      <Card.Title>PAMM (Strategy Manager)</Card.Title>
                      <Card.Subtitle>
                        More profits to you when you share your success with
                        others
                      </Card.Subtitle>
                      <Card.Link
                        href="https://my.uitfx.com/create-manager-account"
                        className="GlobalBtn px-5"
                        onClick={createManagerAccount}
                        target="_blank"
                      >
                        Become a Manager
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
          <Bubbles></Bubbles>
        </div>

        <div className="ShapeBackground PammInvestor">
          <div className="ShapeWrapperBox">
            <Container>
              <Row className="align-items-center">
                <Col lg={6}>
                  <div>
                    <Image
                      src={Profile}
                      alt="Calculator"
                      width={500}
                      priority={true}
                      layout="responsive"
                    ></Image>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="SectionTitleFlip">
                    <h2>Become a PAMM Account Manager</h2>
                    <ul>
                      <li>Managing Multiple Accounts Simultaneously</li>
                      <li>Commission-Based Earnings</li>
                      <li>Higher Profit Potential</li>
                      <li>Scalability option.</li>
                      <li>Diversified Strategies</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="PammMarket PammMarketManager">
          <Container>
            <Row className="flex-md-column-reverse flex-sm-column-reverse flex-column-reverse flex-lg-row align-items-center">
              <Col lg={6}>
                <div className="SectionTitleFlip">
                  <h2>What is UITFX PAMM?</h2>
                  <p className="mb-3">
                    Manage multiple investor accounts simultaneously, pooling
                    funds together & more profit.
                  </p>
                  <ul>
                    <li>Large Investors network.</li>
                    <li>Performance-Based Fees</li>
                    <li>Scalability</li>
                    <li>Diversification option</li>
                    <li>Fairest profit share.</li>
                  </ul>
                </div>
                <span className="GlobalBtn GlobalBtnOutline px-5 d-inline-block mt-4">
                  <Link
                    href="https://my.uitfx.com/create-account"
                    legacyBehavior
                  >
                    <a onClick={ManageNow} target="_blank">
                      Manage Now
                    </a>
                  </Link>
                </span>
              </Col>
              <Col lg={6}>
                <div className="text-xxl-end">
                  <Image
                    src={Chess}
                    alt="Chess"
                    width={500}
                    priority={true}
                  ></Image>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="CopyTradeSection CopyTradePammManager">
          <Container>
            <Row className="justify-content-center">
              <Col xxl={9} className="text-center">
                <SectionTitleFlip headingtitle="Why Become a Strategy Manager with UITFX Markets?"></SectionTitleFlip>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xxl={12}>
                <PammCardAnother></PammCardAnother>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="ShapeBackground PammInvestor BecomeInvestor">
          <div className="ShapeWrapperBox">
            <Container>
              <Row className="align-items-center">
                <Col lg={6}>
                  <div>
                    <Image
                      src={Profile}
                      alt="Profile"
                      width={500}
                      priority={true}
                      layout="responsive"
                    ></Image>
                  </div>
                </Col>
                <Col lg={6}>
                  <SectionTitleFlipListing
                    headingTitle="How to become a Strategy Manager"
                    listingOne="1. Register with us or log in to UITFX Markets"
                    listingTwo="2. Open an Manager account in UITFX Markets"
                    listingThree="3. 	Get approved & followed by investors"
                    listingFour="4. Keep trading well"
                    listingFive="5. Get share of your investor’s profit"
                  ></SectionTitleFlipListing>
                  <span className="pamm-btn">
                    <Link
                      href="https://my.uitfx.com/create-account"
                      legacyBehavior
                    >
                      <a onClick={ManageNowAnother} target="_blank">
                        Manage Now
                      </a>
                    </Link>
                  </span>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <JoinCommunity></JoinCommunity>

        <FaqForPammManager></FaqForPammManager>
        <PaymentMethod></PaymentMethod>
        <BestTrader></BestTrader>
        <Review></Review>
        <Footer></Footer>
      </main>
    </div>
  );
}
