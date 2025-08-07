import Head from "next/head";
import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";
import Bubbles from "../../components/animation/Bubbles";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Terms and Conditions | UITFX Markets</title>
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
                      <Card.Title>
                        No Deposit Bonus <br /> Terms & Condition
                      </Card.Title>
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
                  <div className="faq-content mb-5 pb-5">
                    <h2 className="mb-4">
                      Terms and conditions for 10$ no deposit bonus:
                    </h2>
                    <p>
                      We offer 10$ no deposit bonus to our clients but there are
                      some terms and conditions that need to be followed.
                      <br></br>Please read about our bonus rules carefully.
                      <br></br>
                      <br></br>
                      <ul className="ms-0 ps-3">
                        <li className="mb-3">
                          Like ,share, subscribe and follow our social media
                          handles and share the proof of same with us..
                        </li>
                        <li className="mb-3">
                          The rules are - "Forex No Deposit Bonus is one of the
                          unique promotions that offer new traders money to open
                          a trading account. The uitfx offers Forex accounts
                          places an amount of money into an account so that the
                          new traders can do trade with real money. It helps
                          user to trade actual trades.
                        </li>
                        <li className="mb-3">
                          The term and conditions implies that the trader does
                          not have to deposit any money of their own to get this
                          bonus and start trading, Deposit Bonus is not totally
                          free it will be applicable by any one following
                          services by traders.
                        </li>
                        <li className="mb-3">
                          Terms & Conditions of no deposit bonus To take part in
                          the promotion, you need to be a client of
                          <Link href="https://uitfx.com/">
                            <a style={{ color: "#4a90e2" }}> uitfx.com </a>
                          </Link>
                          with a real account and verified personal details
                        </li>
                        <li className="mb-3">Minimum withdrawal is 25 USD</li>
                        <li className="mb-3">
                          Maximum leverage should be only 200
                        </li>
                        <li className="mb-3">
                          Min lot size should be 5 trading lots in currency
                          pairs
                        </li>
                        <li className="mb-3">
                          Bonus amount can't be use for internal transfer
                          Account should be maintained with us for 30 days
                          Trades Should be done as per our terms and conditions
                        </li>
                        <li className="mb-3">
                          Only profit amount allowed to withdraw and it will be
                          processed in any of our payment methods in the
                          direction of company.
                        </li>
                        <li className="mb-3">
                          The Bonus can be awarded once per household or IP
                          address or phone number or a Customer.
                        </li>
                      </ul>
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
