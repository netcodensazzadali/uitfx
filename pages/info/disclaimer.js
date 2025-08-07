import Head from "next/head";
import { Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Bubbles from "../../components/animation/Bubbles";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Disclaimer | UITFX Markets</title>
        <meta
          name="description"
          content="UITFX Markets is a global forex, commodities, stocks brokers to provide the clients best trading experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="banner-section-wrapper bubbles-wrapper banner-all-section pb-0">
          <Container fluid="xxl">
            <Row className="banner-section">
              <Col xxl={12}>
                <div className="banner-title">
                  <Card className="bg-transparent border-0">
                    <Card.Body>
                      <Card.Title>Disclaimer</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
          <Bubbles></Bubbles>
        </div>
        <div className="faq-wrapper-area bg-transparent">
          <div className="faq-wrapper">
            <Container>
              <Row>
                <Col xl={12}>
                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">Leverage</h2>
                    <p>
                      High Leverage and low Margin can result in significant
                      losses due to small price fluctuations in the traded
                      products. High Leverage allows the Customer to assume more
                      risk, magnifying both losses and profits; which can result
                      in loss up to and in excess of Deposits and Margin. The
                      Customer must consider that if the trend on the market is
                      against him/her the Customer may sustain a total loss of
                      the initial margin funds and any additional funds
                      deposited to maintain open positions. The Customer is
                      responsible for all his/her risks, financial resources
                      he/she uses and for the chosen trading strategy.
                      <br />
                      <br />
                      Foreign Exchange and any other Over-the-Counter (“OTC”)
                      derivative product (Traded Contracts) trading is highly
                      speculative and is only suitable for Customers who
                      understand and are willing to assume the economic, legal
                      and other risks involved, and are financially able to
                      assume losses up to or in excess of Margin or Deposits.
                      The customer hereby certifies that the Customer
                      understands these risks and that the Customer is willing
                      and able financially and otherwise to assume the risks of
                      Traded Contracts Trading and that loss of the Customer’s
                      entire Trading Account Balance will not result in a
                      negative change to the Customer’s life-style. Opening an
                      Trading Account in order to speculate or assume risk of
                      any sort on Traded Contracts and other products through
                      the Over‐the‐Counter (“OTC”) market provided by " United
                      International Trading Co. Ltd " on a”Spot” basis means
                      assumptions of the following risks:
                    </p>
                  </div>
                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">Quotes and Margin:</h2>
                    <p>
                      Quotes and Margins are set by United International Trading
                      Co. Ltd and may differ from other firms. United
                      International Trading Co. Ltd will exercise discretion in
                      setting and collecting Margin. United International
                      Trading Co. Ltd is authorized to convert funds in the
                      Customer’s Trading Account for Margin into and from such
                      foreign currency at a rate of exchange determined by
                      United International Trading Co. Ltd in its sole
                      discretion on the basis of then‐prevailing money market
                      rates. The Customer must maintain the minimum Margin Level
                      requirement on Customer’s Open Positions at all times. The
                      Customer assumes the responsibility to monitor the
                      Customer’s Required Margin. United International Trading
                      Co. Ltd has the right to liquidate any or all Open
                      Positions whenever the minimum Margin requirement is not
                      maintained. To avoid a Margin Call it is highly
                      recommended to maintain a Margin Level of 1000% or
                      greater.
                    </p>
                  </div>
                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">Risk Reduction</h2>
                    <p>
                      Stop Loss Orders or Stop Limit Orders, which are intended
                      to limit losses may reduce the losses incurred by price
                      fluctuations, however such orders may not be able to
                      execute under certain abnormal market conditions.
                    </p>
                  </div>

                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">Product Risks</h2>
                    <p>
                      The profit and loss in any given Transaction may be
                      affected by a currency rate that is used to convert to the
                      Accounts base currency. Accounts shall be opened in the
                      following currencies: USD as stated by the Customer and
                      accepted by United International Trading Co. Ltd.
                    </p>
                  </div>
                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">Technical</h2>
                    <p>
                      The profit and loss in any given Transaction may be
                      affected by a currency rate that is used to convert to the
                      Accounts base currency. Accounts shall be opened in the
                      following currencies: USD as stated by the Customer and
                      accepted by United International Trading Co. Ltd.
                      <br />
                      The Customer is responsible for any technical issues
                      sustained on the Customer’s side. These issues include but
                      are not limited to:
                    </p>
                    <ul className="list-unstyled ms-3">
                      <li className="mb-3">
                        (a) Failure of Customer’s hardware, software or internet
                        connection;
                      </li>
                      <li className="mb-3">
                        (b) Improper operation of Customer equipment
                      </li>
                      <li className="mb-3">
                        (c) Improper settings on the Customer’s Terminal
                      </li>
                      <li className="mb-3">
                        (d) Delay of Customer Terminal updates
                      </li>
                      <li className="mb-3">
                        (e) MetaTrader Failure on Customer’s Computer
                      </li>
                    </ul>
                    <p>
                      The Customer acknowledged that at the moment of peak load
                      there may be some difficulties in getting telephone
                      communication with the duty operator, especially on the
                      fast market (for example, when key economic indicators are
                      released).
                    </p>
                  </div>
                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">Transmission</h2>
                    <p>
                      The Customer acknowledged that once a Transmission is made
                      from the Client Terminal and enters the execution queue
                      and begins being processed it cannot be cancelled. Any
                      other instruction pertaining to the Transmission will be
                      ignored until the Transmission is completed. The customer
                      should always verify thoroughly that the details of
                      Volume, Product and Price Level prior to submitting any
                      Transaction. All Transactions are performed on a
                      First-In-First-Out basis.
                    </p>
                  </div>
                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">Trading Agents</h2>
                    <p>
                      In the event that the Customer grants trading authority to
                      a third party, the “Trading Agent”, whether on a
                      discretionary or non‐discretionary basis United
                      International Trading Co. Ltd shall in no way be
                      responsible for reviewing the Customer’s choice of such
                      Trading Agent. United International Trading Co. Ltd is in
                      no way liable for any losses incurred by such a party and
                      any disputes that may arise will be resolved between
                      Customer and Trading Agent. In case of an unnamed Trading
                      Agent on the Customer’s Account, United International
                      Trading Co. Ltd is not liable for rejecting any
                      instruction from a non-authorized party on the Customer’s
                      Trading Account.
                    </p>
                  </div>
                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">Trade Execution Rule</h2>
                    <p>
                      Minimum trade Execution time should be one minute and
                      trade whose execution time is found to be less than the
                      mentioned time will be enlisted as unethical trade.
                    </p>
                  </div>
                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">Phone Communication</h2>
                    <p>
                      The Customer understands that during peak trading hours
                      that the Customer may experience some difficulties in
                      contacting United International Trading Co. Ltd due to
                      high volume. United International Trading Co. Ltd cannot
                      be held liable for any disruptions in service due to any
                      Force majeure.
                    </p>
                  </div>
                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">Human Errors</h2>
                    <p>
                      The Customer understands that any error that is made by a
                      United International Trading Co. Ltd employee that results
                      in any position opened at an “untraded” price cannot be
                      honored and will subsequently be deleted.
                    </p>
                  </div>
                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">Bankruptcy</h2>
                    <p>
                      In case of Bankruptcy creditors retain priority. All
                      transactions entered into with United International
                      Trading Co. Ltd by the Customer are not traded on an
                      exchange. Therefore, under the regulating code of law, the
                      Customer’s funds may not receive the same protections as
                      funds used to guarantee exchange-traded futures or options
                      contracts. If the company becomes insolvent, the
                      Customer’s claim for deposits and profits may not receive
                      priority. The customer is a general creditor and will be
                      paid as such from any monies still available after
                      priority claims are paid.
                    </p>
                  </div>
                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">Force Majeure</h2>
                    <p>
                      In case of Force Majeure the Customer shall accept the
                      risk of financial losses.
                    </p>
                  </div>
                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">
                      Why should I invest in cash indices?
                    </h2>
                    <p>
                      Cash indices track and measure a particular group of
                      related stocks. Since there are thousands of such stocks
                      trading across the various exchanges, indices provide a
                      window into the overall market sentiment and prove to be
                      an effective tool to benchmark against individual stock
                      portfolios. The advantage of trading cash indices over
                      individual securities and commodities is the amount of
                      exposure they provide to the entire industry. As an
                      investor, you don’t need to conduct research on individual
                      P&L statements and news reports of different companies.
                      Depending on the market sentiment, all you have to do is
                      take a short or long position. When traders invest in cash
                      indices, instead of individual securities, the risk factor
                      is considerably reduced, since the effect of a single
                      company’s performance doesn’t influence the entire index.
                      This suits the more risk-averse and long-term investor.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
