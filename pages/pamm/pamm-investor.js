import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BannerForPamInvestor from "../../components/banners/BannerForPamInvestor";
import Footer from "../../components/footer/Footer";
import BestTrader from "../../components/sections/BestTrader";
import FaqForPammInvestor from "../../components/sections/FaqForPammInvestor";
import PammCard from "../../components/sections/PammCard";
import PaymentMethod from "../../components/sections/PaymentMethod";
import Review from "../../components/sections/Review";
import WhichOneOther from "../../components/sections/WhichOneOther";
import SectionTitleFlip from "../../components/titles/SectionTitleFlip";
import SectionTitleFlipListing from "../../components/titles/SectionTitleFlipListing";
import Calculator from "../../public/img/calculator.png";
import Percentage from "../../public/img/percentage.png";
import Profile from "../../public/img/profile.png";
import { trackPixel } from "../../utils/trackPixel";
export default function PammInvestor() {
  const pammInvestNow = () => {
    trackPixel("Lead", { accountType: "Live" });
  };
  const pammInvestNowAnother = () => {
    trackPixel("Lead", { accountType: "Live" });
  };
  return (
    <div>
      <Head>
        <title>PAMM Investor | UITFX Markets </title>
        <meta
          name="description"
          content="UITFX Markets is a global forex, commodities, stocks brokers to provide the clients best trading experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BannerForPamInvestor></BannerForPamInvestor>
        <div className="ShapeBackground PammInvestor">
          <div className="ShapeWrapperBox">
            <Container>
              <Row className="align-items-center">
                <Col lg={6}>
                  <div>
                    <Image
                      src={Calculator}
                      alt="Calculator"
                      width={500}
                      priority={true}
                      layout="responsive"
                    ></Image>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="SectionTitleFlip">
                    <h2>Easy profit without skills</h2>
                    <ul>
                      <li>Leverage the skills of professional traders</li>
                      <li>Fund Management by professional traders.</li>
                      <li>Low Effort, High Potential.</li>
                      <li>Diversification of capital for minimizing risk.</li>
                      <li>Passive investment plan with minimal effort</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="PammMarket">
          <Container>
            <Row className="flex-md-column-reverse flex-sm-column-reverse flex-column-reverse flex-lg-row align-items-center">
              <Col lg={6}>
                <div className="SectionTitleFlip" style={{ maxWidth: "80%" }}>
                  <h2>What is UIT FX PAMM?</h2>
                  <p className="mb-3">
                    An investment system where investors pool their funds, and a
                    professional trader manages the trades on their behalf,
                    sharing profits based on the amount invested.
                  </p>
                  <ul>
                    <li>Easy start, no complexity. </li>
                    <li>Pro Traders network</li>
                    <li>Transparent fund management.</li>
                    <li>Diversification option.</li>
                    <li>Fairest profit share.</li>
                  </ul>
                </div>
                <span className="GlobalBtn GlobalBtnOutline px-5 mt-4 d-inline-block">
                  <Link
                    href="https://my.uitfx.com/create-investor-account"
                    legacyBehavior
                  >
                    <a onClick={pammInvestNow} target="_blank">
                      invest now
                    </a>
                  </Link>
                </span>
              </Col>
              <Col lg={6}>
                <div className="text-xxl-end">
                  <Image
                    src={Percentage}
                    alt="Calculator"
                    width={500}
                    priority={true}
                  ></Image>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="CopyTradeSection">
          <Container>
            <Row className="justify-content-center">
              <Col xxl={6} className="text-center">
                <SectionTitleFlip headingtitle="Why copy trade with UITFX Markets?"></SectionTitleFlip>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xxl={12}>
                <PammCard></PammCard>
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
                    headingTitle="How to become an investor"
                    listingOne="1. Register with us or log in to UITFX"
                    listingTwo="2. Open an Invest account in UITFX"
                    listingThree="3. Make a deposit."
                    listingFour="4. Choose a Strategy Manager"
                    listingFive="5. Automatically copy their strategy"
                  ></SectionTitleFlipListing>
                  <span className="pamm-btn">
                    
                    <Link
                      href="https://my.uitfx.com/create-investor-account"
                      legacyBehavior
                    >
                      <a onClick={pammInvestNowAnother} target="_blank">
                        invest now
                      </a>
                    </Link>
                  </span>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <WhichOneOther
          title="Join Community"
          subtitle="Ready to join the UIT FX Investors community?"
        ></WhichOneOther>

        <FaqForPammInvestor></FaqForPammInvestor>
        <PaymentMethod></PaymentMethod>
        <BestTrader></BestTrader>
        <Review></Review>
        <Footer></Footer>
      </main>
    </div>
  );
}
