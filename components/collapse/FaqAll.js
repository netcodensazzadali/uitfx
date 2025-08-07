import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";

const FaqAll = () => {
  const [cardText, setCar] = useState({
    HeaderTitle: [
      "1)	How do I start?",
      "2)	What documents are required in order to open an live account?",
      "3)	Can I open two different accounts with the same username and email address?",
      "4)	What should I do if I forgot my MT5 live account username and/or password?",
      "5)	How to deposit trading account?",
      "6)	How can I withdraw money from the trading account?",
      "7)	What will happen if my account has no balance?",
    ],
    ListlingContent: [
      "i.	Click the REGISTER button on this page",
      " ii.	Fill out all the fields and verify your account by clicking on the email sent to your email inbox",
      " iii.	Complete your profile by answering a few short questions and to confirm that you are who you say you are",
      " iv.	Click to DEPOSIT by using bank wire, credit card or e-wallet to deposit into your trading account",
      "v.	Visit the download center in your portal to download MT5 and to place your first trade.",
    ],
    BodyText: [
      "Clients must provide essential identification information, which includes a copy of identification (passport or identity card), proof of residency (such as utility bills, bank or credit card bill), and upload it on our website. UITFX MARKET reserves the right to request additional information and in some cases certified copies of the documents are required.Documents submitted are required to be in English, and if it is not, it is required to be translated into English, which is signed and verified either by Attorney or Notary.",

      "In the event where the trader wants to open a new trading account with different username, the email address used must be different from the previous registered trading account as ONE username can only be synchronized with ONE registered email address. However, clients are allowed to open up to 5 trading accounts under the same username.",

      "If you have forgotten your MT5 account username or password, send in an email to support@uitfx.com from your registered email.",

      "You can top up your trading account via your Client Profile using electronic payment systems indicated on the same page. In order to top up the account with the help of your bank card, you can use several intermediary payment systems. Also, you can deposit money in your account through bank wire transfer. To select any of the deposit methods above, click the 'Deposit' button in the CRM and select the 'Bank Transfer' option.",

      "Our withdrawals are handled automatically, enabling to reduce the queue-list of withdrawal requests. You can withdraw money anytime from the trading account via your Client Profile in the 'Withdraw' section, ",

      "There will be no issue even if the account remains at zero balance for a long time.",
    ],
  });
  return (
    <div className="accordion-wrapper">
      <Card>
        <Card.Body>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{cardText.HeaderTitle[0]}</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>{cardText.ListlingContent[0]}</li>
                  <li>{cardText.ListlingContent[1]}</li>
                  <li>{cardText.ListlingContent[2]}</li>
                  <li>{cardText.ListlingContent[3]}</li>
                  <li>{cardText.ListlingContent[4]}</li>
                  <li>{cardText.ListlingContent[5]}</li>
                  <li>{cardText.ListlingContent[6]}</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>{cardText.HeaderTitle[1]}</Accordion.Header>
              <Accordion.Body>{cardText.BodyText[0]}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>{cardText.HeaderTitle[2]}</Accordion.Header>
              <Accordion.Body>{cardText.BodyText[1]}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>{cardText.HeaderTitle[3]}</Accordion.Header>
              <Accordion.Body>{cardText.BodyText[3]}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>{cardText.HeaderTitle[4]}</Accordion.Header>
              <Accordion.Body>{cardText.BodyText[4]}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>{cardText.HeaderTitle[5]}</Accordion.Header>
              <Accordion.Body>{cardText.BodyText[5]}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>{cardText.HeaderTitle[6]}</Accordion.Header>
              <Accordion.Body>{cardText.BodyText[6]}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FaqAll;
