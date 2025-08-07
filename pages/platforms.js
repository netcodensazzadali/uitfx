import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BannerForPlatform from "../components/banners/BannerForPlatform";
import Footer from "../components/footer/Footer";
import PaymentMethod from "../components/sections/PaymentMethod";
import Review from "../components/sections/Review";
import PlatFormTabs from "../components/tabs/PlatFormTabs";
import SectionTitleFlipListing from "../components/titles/SectionTitleFlipListing";
import Desktop from "../public/img/desktop.png";

export default function Platforms() {
  return (
    <div>
      <Head>
        <title>
          Desktop Platform | Mobile Trader | MAMM & PAMM Platform - UITFX
          Markets
        </title>
        <meta
          name="description"
          content="UITFX Markets is a global forex, commodities, stocks brokers to provide the clients best trading experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BannerForPlatform></BannerForPlatform>
        <div className="ShapeBackground PammInvestor">
          <div className="ShapeWrapperBox">
            <Container>
              <Row className="align-items-center">
                <Col lg={5} xl={6}>
                  <div className="text-md-center text-lg-end py-5 py-lg-0 ">
                    <Image
                      src={Desktop}
                      alt="Calculator"
                      priority={true}
                    ></Image>
                  </div>
                </Col>
                <Col lg={7} xl={6}>
                  <SectionTitleFlipListing
                    headingTitle="Most Intuitive Trading Platform"
                    listingOne="1. 30+ built-in indicators"
                    listingTwo="2. 20+ time frames"
                    listingThree="3. Integrated economic calendar"
                    listingFour="4. Fastest & optimized trade processing speed"
                    listingFive="5. Hedge trade positions option"
                    listingSix="6. Advanced functionality for pending order"
                  ></SectionTitleFlipListing>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="MetaTraderPlatform">
          <Container fluid="xl">
            <Row>
              <Col xxl="12">
                <PlatFormTabs></PlatFormTabs>
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
