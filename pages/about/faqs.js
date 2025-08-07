import Head from "next/head";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BannerAll from "../../components/banners/BannerAll";
import AccordionWrapper from "../../components/collapse/AccordionWrapper";
import Footer from "../../components/footer/Footer";
import PaymentMethod from "../../components/sections/PaymentMethod";
import Review from "../../components/sections/Review";
import SectionTitleFlip from "../../components/titles/SectionTitleFlip";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FREQUENTLY ASKED QUESTIONS | FAQs | UITFX Markets</title>
        <meta
          name="description"
          content="UITFX Markets is a global forex, commodities, stocks brokers to provide the clients best trading experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BannerAll
          title="FAQ"
          subtitle="Frequently Asked Questions"
        ></BannerAll>
        <div className="faq-wrapper-area">
          <div className="faq-wrapper">
            <Container>
              <Row>
                <Col xxl={12} className="text-center">
                  <SectionTitleFlip
                    
                    headingtitle="Listed Questions"
                  ></SectionTitleFlip>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xxl={8} xl={10}>
                  <AccordionWrapper></AccordionWrapper>
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
