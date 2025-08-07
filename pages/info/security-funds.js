import Head from "next/head";
import { Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Bubbles from "../../components/animation/Bubbles";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Security of Funds | UITFX Markets</title>
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
                      <Card.Title>Security of Funds</Card.Title>
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
                    <h2 className="mb-4">
                      Leading the Industry in Insurance Coverage
                    </h2>
                    <p>
                      UITFX has taken further steps to ensure the protection of
                      its responsibilities towards Clients and other third
                      parties by implementing a Civil Liability insurance plan
                      with a coverage limit of €5,000,000. This comprehensive
                      program offers cutting-edge coverage against errors,
                      omissions, negligence, fraud, and various other risks that
                      could potentially result in financial loss.
                    </p>
                  </div>
                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">
                      Setting Industry Standards - Prioritizing Financial
                      Security
                    </h2>
                    <p>
                      The UITFX brand has established itself as a global
                      frontrunner in online trading, specializing in forex,
                      derivatives linked to US and UK stocks, commodities, spot
                      metals, and indices. Ensuring the security of client funds
                      aligns with our unparalleled trading conditions and
                      exceptional customer support. With international acclaim
                      for our excellence, a strong reputation, and multiple
                      awards, our clients can have full confidence that their
                      funds are securely held.
                    </p>
                  </div>
                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">
                      Partnerships with Prominent Financial Institutions
                    </h2>
                    <p>
                      UITFX has made the strategic choice to exclusively
                      collaborate with major global banks. Leveraging the
                      strength and international reputation of the UITFX brand
                      empowers the company to ensure liquidity through
                      well-established banking partners.
                    </p>
                  </div>

                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">Segregation of Funds</h2>
                    <p>
                      Funds belonging to our clients are directed into separate
                      bank accounts distinct from those utilized by the company.
                      These funds are entirely separate from the company's
                      financial records and cannot be utilized to settle
                      obligations in the unlikely event of the company's
                      default.
                    </p>
                  </div>
                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">
                      Safeguarding Against Negative Balances
                    </h2>
                    <p>
                      Given the inherent market volatility, UITFX's commitment
                      to negative balance protection guarantees that even during
                      highly turbulent market conditions, when margin calls and
                      stop outs may not operate as intended, no client will be
                      held responsible for repaying a negative balance.
                    </p>
                  </div>
                  <div className="faq-content mb-5 ">
                    <h2 className="mb-4">Proactive Risk Oversight</h2>
                    <p>
                      UITFX consistently identifies, evaluates, and monitors
                      various types of risks associated with its operations.
                      This entails an ongoing assessment of the effectiveness of
                      the established policies, arrangements, and procedures.
                      This approach ensures that the company is well-prepared to
                      meet its financial obligations and capital requirements at
                      all times.
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
