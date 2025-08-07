import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BannerForPartnership from "../components/banners/BannerForPartnership";
import Footer from "../components/footer/Footer";
import BecomeAnIb from "../components/sections/BecomeAnIb";
import FaqForPartnership from "../components/sections/FaqForPartnership";
import PaymentMethod from "../components/sections/PaymentMethod";
import Review from "../components/sections/Review";
import StepsCardForPartnership from "../components/sections/StepsCardForPartnership";
import SectionTitleFlip from "../components/titles/SectionTitleFlip";
import LevelCommission from "../public/img/3-level-commission.png";
import CpaBonus from "../public/img/cpa-bonus.png";
import FreePromotion from "../public/img/free-promotion.png";
import MonthlyReword from "../public/img/monthly-reword.png";
import Percentage from "../public/img/percentage-symbol.png";
import { trackPixel } from "../utils/trackPixel";
export default function Partnership() {
  const becomeAnIbLevel3 = () => {
    trackPixel("Lead", { accountType: "Live" });
  };
  const monthlyReward = () => {
    trackPixel("Lead", { accountType: "Live" });
  };
  const cpaBonusButton = () => {
    trackPixel("Lead", { accountType: "Live" });
  };
  const freePromotionBanner = () => {
    trackPixel("Lead", { accountType: "Live" });
  };
  const ibBenifitsBanner = () => {
    trackPixel("Lead", { accountType: "Live" });
  };
  return (
    <div>
      <Head>
        <title>Introducing Broker | UITFX Markets</title>
        <meta
          name="description"
          content="UITFX Markets is a global forex, commodities, stocks brokers to provide the clients best trading experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BannerForPartnership></BannerForPartnership>

        <div className="broker-card">
          <Container fluid="xxl">
            <Row>
              <Col lg={12}>
                <div className="broker-card-wrapper">
                  <div className="broker-card-content">
                    <h2>3 Level Commission</h2>
                    <p>
                      A three-tier attractive commission program with limitless
                      profit.
                    </p>
                  </div>
                  <div className="broker-card-content">
                    <h2>Extra Reward Every Month</h2>
                    <p>
                      Rewarding excellence with shared growth and mutual
                      success.
                    </p>
                  </div>
                  <div className="broker-card-content">
                    <h2>CPA Bonus</h2>
                    <p>
                      Exclusive bonus for every successful client you onboard
                      with us.
                    </p>
                  </div>
                  <div className="broker-card-content">
                    <h2>Free Promotion Tools</h2>
                    <p>
                      You will have all the tools; just spread the words for us.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="ShapeBackground PammInvestor">
          <div className="ShapeWrapperBox">
            <Container fluid="xxl">
              <Row className="align-items-center justify-content-center">
                <Col lg={6} className="text-center text-lg-start">
                  <div className="mb-5 mb-lg-0">
                    <Image
                      src={LevelCommission}
                      max-width={544}
                      alt="3 Level Commission"
                      priority={true}
                    ></Image>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="SectionTitleFlip ps-0">
                    <span>Introducing Broker (IB)</span>
                    <h2>
                      3 Level <br></br>Commission
                    </h2>
                    <ul>
                      <li>1. Refer clients to our platform.</li>
                      <li>
                        2. Get commissions on each time your clients trades.
                      </li>
                      <li>3. Up to level 3 client referral level.</li>
                      <li>4. No commission cap.</li>
                      <li>5. More profits to you.</li>
                    </ul>
                  </div>
                  <span className="GlobalBtn GlobalBtnOutline btn-invest px-5 mt-4 d-inline-block">
                    <Link
                      href="https://my.uitfx.com/profile-view"
                      legacyBehavior
                    >
                      <a onClick={becomeAnIbLevel3} target="_blank">
                        become an IB
                      </a>
                    </Link>
                  </span>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="BenefitsSection">
          <Container fluid="xxl">
            <Row className="flex-md-column-reverse flex-sm-column-reverse flex-column-reverse flex-lg-row align-items-center ">
              <Col lg={6}>
                <div className="SectionTitleFlip">
                  <span>Exclusive Incentive</span>
                  <h2>Monthly Reword</h2>
                  <ul>
                    <li>1. Recognizing contributions with monthly rewards.</li>
                    <li>2. More reward based on monthly performances.</li>
                    <li>
                      3. Encouraging progress by aligning rewards with results.
                    </li>
                    <li>
                      4. Aligning growth with shared achievements for all.
                    </li>
                  </ul>
                </div>
                <span className="GlobalBtn btn-invest px-5 mt-4 d-inline-block">
                  <Link href="https://my.uitfx.com/profile-view" legacyBehavior>
                    <a onClick={monthlyReward} target="_blank">
                      become an IB
                    </a>
                  </Link>
                </span>
              </Col>
              <Col lg={6}>
                <div className="text-lg-end text-md-center text-sm-start text-start mb-5 mb-lg-0">
                  <Image
                    src={MonthlyReword}
                    alt="Profile"
                    width={500}
                    priority={true}
                    layout="responsive"
                  ></Image>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="ShapeBackground PammInvestor">
          <div className="ShapeWrapperBox">
            <Container fluid="xxl">
              <Row className="align-items-center">
                <Col lg={6} className="text-center text-lg-start">
                  <div className="mb-5 mb-lg-0">
                    <Image
                      src={CpaBonus}
                      width={529}
                      alt="Cpa Bonus Amount"
                      priority={true}
                    ></Image>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="SectionTitleFlip ps-0">
                    <span>More Client, More Bonus</span>
                    <h2>CPA Bonus</h2>
                    <ul>
                      <li>1. All you have to do is, refer clients to UITFX.</li>
                      <li>2. Get result-driven CPA incentives.</li>
                      <li>
                        3. Growth-focused CPA benefits aligning with efforts.
                      </li>
                      <li>
                        4. Recognizing achievements with goal-driven CPA
                        rewards.
                      </li>
                    </ul>
                  </div>
                  <span className="GlobalBtn GlobalBtnOutline btn-invest px-5 mt-4 d-inline-block">
                    <Link
                      href="https://my.uitfx.com/profile-view"
                      legacyBehavior
                    >
                      <a onClick={cpaBonusButton} target="_blank">
                        become an IB
                      </a>
                    </Link>
                  </span>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="BenefitsSection">
          <Container fluid="xxl">
            <Row className="flex-md-column-reverse flex-sm-column-reverse flex-column-reverse flex-lg-row align-items-center ">
              <Col lg={6}>
                <div className="SectionTitleFlip">
                  <span>Spread the words</span>
                  <h2>Free Promotion</h2>
                  <ul>
                    <li>
                      1. Access free, promotional tools for effective client
                      engagement.
                    </li>
                    <li>2. Ready-to-use banners, links, and content.</li>
                    <li>
                      3. Maximize your efforts with promotional resources.
                    </li>
                    <li>
                      4. Drive growth with exclusive marketing materials at no
                      cost.
                    </li>
                  </ul>
                </div>
                <span className="GlobalBtn btn-invest px-5 mt-4 d-inline-block">
                  <Link href="https://my.uitfx.com/profile-view" legacyBehavior>
                    <a onClick={freePromotionBanner} target="_blank">
                      become an IB
                    </a>
                  </Link>
                </span>
              </Col>
              <Col lg={6} className="text-center text-md-start">
                <div className="mb-5 mb-lg-0">
                  <Image
                    src={FreePromotion}
                    alt="Profile"
                    width={492}
                    priority={true}
                  ></Image>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="ProfitableSteps">
          <Container>
            <Row>
              <Col xxl={12} className="text-center">
                <SectionTitleFlip
                  headingSubTitle="Become an IB at UIT FX"
                  headingtitle="Simple steps to be profitable"
                ></SectionTitleFlip>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xxl={7}>
                <StepsCardForPartnership></StepsCardForPartnership>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="BenefitsSection">
          <Container fluid="xxl">
            <Row className="flex-md-column-reverse flex-sm-column-reverse flex-column-reverse flex-lg-row align-items-center ">
              <Col lg={6}>
                <div className="SectionTitleFlip">
                  <h2>UTFX IB Benefits</h2>
                  <ul>
                    <li> 1. No limit on Total Commissions</li>
                    <li>2. No limit on Commissions per Client</li>
                    <li> 3. Simple and easy Process</li>
                    <li> 4. 24 hour/Five days a week support</li>
                  </ul>
                </div>
                <span className="GlobalBtn btn-invest px-5 mt-4 d-inline-block">
                  <Link href="https://my.uitfx.com/profile-view" legacyBehavior>
                    <a onClick={ibBenifitsBanner} target="_blank">
                      become an IB
                    </a>
                  </Link>
                </span>
              </Col>
              <Col lg={6} className="text-center text-md-start">
                <div className="mb-5 mb-lg-0">
                  <Image
                    src={Percentage}
                    alt="Profile"
                    width={500}
                    priority={true}
                    layout="responsive"
                  ></Image>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <BecomeAnIb
          title="Limitless Commission"
          subtitle="Become an UITFX IB Partner today!"
        ></BecomeAnIb>
        <PaymentMethod></PaymentMethod>

        <Review></Review>
        <FaqForPartnership></FaqForPartnership>
        <Footer></Footer>
      </main>
    </div>
  );
}
