import Link from "next/link";
import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";

const AccordionWrapperPammManager = () => {
  const [cardText, setCar] = useState({
    HeaderTitle: [
      "1) What is a Strategy Manager?",
      "2)	How do you become a strategy manager with UITFX?",
      "3)	What skill do I need to be a strategy manager?",
      "4)	How much can I gain as a strategy manager?",
      "5)	Are there any extra fees to pay?",
    ],
    BodyText: [
      "A Strategy Manager offers other traders to follow their positions and copy their strategies automatically. On successful trades, they will receive a percentage of the profits. Hence, the higher the number of followers a Strategy Manager has, the greater the income.",

      "Very simple. You just have to Sign up and open a manager account. Once you have done that, contact our support team and share your trade results. After being approved, you can start trading and earn a percentage of your investors' profit.",

      "Having the necessary market knowledge and confidence in your trading strategies are the key components. It is also very important to keep track of the markets and conduct research often to increase your success chances",

      "The answer depends completely on the markets traded, the amount of capital invested, and the size of positions.  ",

      "Not at all. You will receive one execution fee for all of your copied trades with no hidden cost. There is no difference in the other costs (e.g., spreads) as if you are trading privately.",
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
            <Accordion.Item eventKey="4">
              <Accordion.Header>{cardText.HeaderTitle[4]}</Accordion.Header>
              <Accordion.Body>{cardText.BodyText[4]}</Accordion.Body>
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

export default AccordionWrapperPammManager;
