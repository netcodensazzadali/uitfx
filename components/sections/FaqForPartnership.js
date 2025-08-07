import Link from "next/link";
import { default as React, useEffect, useState } from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import SectionTitleFlip from "../titles/SectionTitleFlip";

const FaqForPartnership = () => {
  const [cardText] = useState({
    HeaderTitle: [
      "1)	What is an Introducing Broker (IB)?",
      "2)	How does the UITFX IB process work?",
      "3)	What are the benefits of becoming an IB with UITFX?",
      "4)	How do I get started as an IB with UITFX?",
      "5)	What are the commission structures for UITFX IBs?",
      "6)	Is there any support provided to UITFX IBs?"
    ],

    BodyText: [
      "An Introducing Broker (IB) in FX trading refers to a partner or intermediary who introduces clients to a Forex broker in exchange for a commission or fee based on the clients' trades or deposits.",

      "The UITFX IB process involves introducing new clients to us. You promote our services and earns commissions based on the trading activity or deposits made by those referred clients.",

      "As an IB with UITFX, you can earn commissions based on client activity, enjoy flexible earning potential, gain access to marketing materials, and receive support from the broker to grow your business.",

      "To get started, you need to sign up with UITFX as a client then apply for becoming IB. After completing the registration process, you’ll receive an affiliate link and marketing tools to start referring clients to the platform.",

      "The commission structure for UITFX IBs typically depends on the trading volume or the number of referred clients. Commissions are earned based on the clients’ trades, spreads, or deposits, with potential for monthly payouts. T&C applicable.",

      "Yes, UITFX provides full support to its IBs, including dedicated account managers, marketing materials, and training resources. IBs are also given real-time access to their clients’ activity for better tracking and optimization.",
    ],
  });
  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window === "undefined") return;

      // Dynamically import GSAP and ScrollTrigger
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Add animations
      const accordions = document.querySelectorAll(".accordion-item");
      accordions.forEach((accordion, index) => {
        gsap.fromTo(
          accordion,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: accordion,
              start: "top 90%",
              end: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    };

    loadGSAP();
  }, []);
  return (
    <div className="faq">
      <Container fluid="xxl">
        <Row className="justify-content-center">
          <Col xxl={9} xl={10} className="text-center mb-3">
            <SectionTitleFlip
              headingSubTitle="FAQ"
              headingtitle="You have the questions, we have the answers"
            ></SectionTitleFlip>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xxl={8} xl={10}>
            <div className="accordion-wrapper">
              <Card>
                <Card.Body>
                  <Accordion defaultActiveKey="0" flush>
                    {cardText.HeaderTitle.map((header, index) => (
                      <Accordion.Item
                        eventKey={`${index}`}
                        className="accordion-item"
                        key={index}
                      >
                        <Accordion.Header>{header}</Accordion.Header>
                        <Accordion.Body>
                          {cardText.BodyText[index]}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </Card.Body>
              </Card>
              <div className="text-center">
                <span className="GlobalBtn GlobalBtnOutline px-5">
                  <Link href="/about/faqs" passHref>
                    See All
                  </Link>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqForPartnership;
