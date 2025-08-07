import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../components/banners/Banner";
import Footer from "../components/footer/Footer";
import AccountTypes from "../components/sections/AccountTypes";
import Advantages from "../components/sections/Advantages";
import ChooseUs from "../components/sections/ChooseUs";
import DownloadApp from "../components/sections/DownloadApp";
import Faq from "../components/sections/Faq";
import PaymentMethod from "../components/sections/PaymentMethod";
import Review from "../components/sections/Review";
import StepsSection from "../components/sections/StepsSection";
import TradingMarkets from "../components/sections/TradingMarkets";
import TradingOption from "../components/sections/TradingOption";
import WhichOne from "../components/sections/WhichOne";

export default function Home() {
  return (
    <div>
      <Head>
        <title>UITFX Markets | True Trading With UITFX Markets</title>
        <meta
          name="description"
          content="UITFX Markets is a global forex, commodities, stocks brokers to provide the clients best trading experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Offer Modal appears on first load. Change imageUrl to your offer image path */}
      {/* <OfferModal imageUrl="/img/offer.png" altText="Special Offer" /> */}
      <main>
        <Banner></Banner>
        <TradingOption></TradingOption>
        <div className="advantages bg-white pb-0">
          <Container>
            <Row className="mb-5">
              <Col xl={12} className="text-center">
                <div className="SectionTitleFlip">
                  <h2 className="mb-3">download trading platform</h2>
                  <span className="text-capitalize">
                    Here you can download platform as per you device
                  </span>
                  <ul className="download-list">
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          layout="intrinsic"
                          src="/img/ch.png"
                          alt="Chrome"
                          width={42}
                          height={42}
                        ></Image>
                        <p className="mb-0">Web Platform</p>
                      </a>
                      
                    </li>
                    <li>
                      <a
                        href="https://download.mql5.com/cdn/web/united.international.trading/mt5/unitedinternationaltrading5setup.exe"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          layout="intrinsic"
                          src="/img/wi.png"
                          alt="Chrome"
                          width={42}
                          height={42}
                        ></Image>
                        <p className="mb-0">MT5 for Desktop</p>
                      </a>
                      
                    </li>
                    <li>
                      <a
                        href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          layout="intrinsic"
                          src="/img/an.png"
                          alt="Chrome"
                          width={42}
                          height={42}
                        ></Image>
                        <p className="mb-0 mt-2">MT5 for Android</p>
                      </a>
                      
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          layout="intrinsic"
                          src="/img/ap.png"
                          alt="Chrome"
                          width={42}
                          height={42}
                        ></Image>
                        <p className="mb-0 mt-2">MT5 for iOS</p>
                      </a>
                      
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="pt-3"></Row>
          </Container>
        </div>
        <Advantages></Advantages>
        <AccountTypes></AccountTypes>
        <TradingMarkets></TradingMarkets>
        <ChooseUs></ChooseUs>
        <StepsSection></StepsSection>
        <DownloadApp></DownloadApp>
        <WhichOne
          title="Trade confidently with a trusted broker"
          subtitle="Sign up today & see what makes us the broker of choice"
        ></WhichOne>
        <PaymentMethod></PaymentMethod>

        <Review></Review>
        <Faq></Faq>
        <Footer></Footer>
      </main>
    </div>
  );
}
