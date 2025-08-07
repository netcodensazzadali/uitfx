import Link from "next/link";
import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";

const AccordionWrapperPammInvestor = () => {
  const [cardText, setCar] = useState({
    HeaderTitle: [
      "1) What is copy trading?",
      "2) What is a copy trading platform?",
      "3)	Is copy trading profitable?",
      "4)	What is the best way to follow and copy another trader?",
    ],
    BodyText: [
      "Copy trading is basically a strategy for managing portfolios. This strategy allows you to choose a more experienced trader than you and copy their strategies and positions to cut down on both the time and effort required to monitor markets and learn technical skills. It is ideal for beginners.",

      "There is no specific trading platform when it comes to copy trading with UIT FX PAMM. From your dashboard, you can see your account details including open trades, as well as monitor your investment account in real-time.",

      "This depends on the Strategy you choose to follow, as well as whether they make successful trades. Keep in mind that, you have to only pay a fee when your Strategy Manager makes a successful trade.",

      "Sign up or log in to UIT FX to create an Invest account. Once you're ready, you'll choose your Strategy Manager, make your deposit, and automatically follow their trades.",
    ],
  });
  return (
    <div className="accordion-wrapper">
      <Card>
        <Card.Body>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{cardText.HeaderTitle[0]}</Accordion.Header>
              <Accordion.Body>{cardText.BodyText[0]}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>{cardText.HeaderTitle[1]}</Accordion.Header>
              <Accordion.Body>{cardText.BodyText[1]}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>{cardText.HeaderTitle[2]}</Accordion.Header>
              <Accordion.Body>{cardText.BodyText[2]}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>{cardText.HeaderTitle[3]}</Accordion.Header>
              <Accordion.Body>{cardText.BodyText[3]}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
      <div className="text-center">
        <span className="GlobalBtn GlobalBtnOutline px-5">
          <Link href="/about/faqs" passHref>
            see all
          </Link>
        </span>
      </div>
    </div>
  );
};

export default AccordionWrapperPammInvestor;
