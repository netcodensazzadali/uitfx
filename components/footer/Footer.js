import { gsap } from "gsap";
import Link from "next/link";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import BackToTop from "../animation/BackToTop";

const Footer = () => {
  // Handle animations for footer sections
  const { ref: marketsRef, inView: marketsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: accountsRef, inView: accountsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ibPartnershipRef, inView: ibPartnershipInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: platformRef, inView: platformInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: companyRef, inView: companyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: reachUsRef, inView: reachUsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: riskDisclaimerRef, inView: riskDisclaimerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: regionalRef, inView: regionalInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: legalRef, inView: legalInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: socialRef, inView: socialInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // GSAP animation on scroll
  React.useEffect(() => {
    if (marketsInView) {
      gsap.fromTo(
        ".markets-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }

    if (accountsInView) {
      gsap.fromTo(
        ".accounts-card",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1 }
      );
    }

    if (ibPartnershipInView) {
      gsap.fromTo(
        ".ib-partnership-card",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }

    if (platformInView) {
      gsap.fromTo(
        ".platform-card",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1 }
      );
    }

    if (companyInView) {
      gsap.fromTo(
        ".company-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }

    if (reachUsInView) {
      gsap.fromTo(
        ".reach-us",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }

    if (riskDisclaimerInView) {
      gsap.fromTo(
        ".risk-disclaimer",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }

    if (regionalInView) {
      gsap.fromTo(
        ".regional-restrictions",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }

    if (legalInView) {
      gsap.fromTo(
        ".legal-section",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }

    if (socialInView) {
      gsap.fromTo(
        ".social-links ul li",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1 }
      );
    }
  }, [
    marketsInView,
    accountsInView,
    ibPartnershipInView,
    platformInView,
    companyInView,
    reachUsInView,
    riskDisclaimerInView,
    regionalInView,
    legalInView,
    socialInView,
  ]);
  return (
    <div className="footer-section bg-white">
      <Container fluid="xxl">
        <Row>
          <Col xxl={12}>
            <div className="footer-wrapper pb-0">
              <div className="footer-links">
                <Card className="markets-card" ref={marketsRef}>
                  <Card.Title>markets</Card.Title>
                  <Card.Body>
                    <Link href="/market" passHref>
                      <a className="footer-card-links">Forex</a>
                    </Link>
                    <Link href="/market" passHref>
                      <a className="footer-card-links">Commodities</a>
                    </Link>
                    <Link href="/market" passHref>
                      <a className="footer-card-links">Stock</a>
                    </Link>
                    <Link href="/market" passHref>
                      <a className="footer-card-links">Indices</a>
                    </Link>
                    <Link href="/market" passHref>
                      <a className="footer-card-links">Crypto</a>
                    </Link>
                  </Card.Body>
                </Card>
                <Card className="accounts-card" ref={accountsRef}>
                  <Card.Title>accounts</Card.Title>
                  <Card.Body>
                    <Link href="/accounts" passHref>
                      <a className="footer-card-links">Classic</a>
                    </Link>
                    <Link href="/accounts" passHref>
                      <a className="footer-card-links">Premium</a>
                    </Link>
                    <Link href="/accounts" passHref>
                      <a className="footer-card-links">VIP</a>
                    </Link>
                  </Card.Body>
                </Card>
                <Card ref={ibPartnershipRef} className="ib-partnership-card">
                  <Card.Title>ib partnership</Card.Title>
                  <Card.Body>
                    <Link href="/partnership" passHref>
                      <a className="footer-card-links">IB Programme</a>
                    </Link>
                  </Card.Body>

                  <Card.Title>Platform</Card.Title>
                  <Card.Body>
                    <Link href="/platforms" passHref>
                      <a className="footer-card-links">Metatrader 5</a>
                    </Link>
                  </Card.Body>
                </Card>

                <Card ref={companyRef} className="company-card">
                  <Card.Title>Promotion</Card.Title>
                  <Card.Body>
                    {/* <Link href="/promotion/no-deposit-bonus" passHref>
                      <a className="footer-card-links">No Deposit Bonus</a>
                    </Link> */}
                    <Link href="/promotion/sign-up-bonus" passHref>
                      <a className="footer-card-links">Sign Up Bonus</a>
                    </Link>
                  </Card.Body>
                  <Card.Title className="mt-3">company</Card.Title>
                  <Card.Body>
                    <Link
                      href="/about/company"
                      className="footer-card-links"
                      passHref
                    >
                      About Us
                    </Link>
                    <Link
                      href="/about/faqs"
                      className="footer-card-links"
                      passHref
                    >
                      FAQ
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="footer-disclaimer reach-us" ref={reachUsRef}>
                <h3>Reach Us</h3>
                <p>
                  <strong>Head Office : </strong>
                  99/238, Moo-9, Nongprue, Banglamung, Chonburi, Thailand.
                  Pin-20150
                </p>
                <p>
                  <strong>Back Office : </strong>
                  1805 Al_Musalla Tower , Central festival Mall Bur Dubai,
                  United Arab Emirates
                </p>
                <p>
                  <strong>Support : </strong>
                  +66 61-331-3845
                </p>
                <p>
                  <strong>Email :</strong>
                  support@uitfx.com
                </p>
              </div>
              <div
                className="footer-disclaimer risk-disclaimer"
                ref={riskDisclaimerRef}
              >
                <p className="mb-3">
                  <strong>Legal:</strong> United International Trading Co., Ltd.
                  is a legally incorporated entity with multiple international
                  registrations.
                </p>
                <p className="mb-3">
                  The website is operated and provides content by United
                  International Trading Co., Ltd., which is incorporated in:
                </p>
                <ul className="list-content mb-3">
                  <li>
                    Thailand, under the Companies Ordinance, with a certificate
                    issued on 25 June 2020.
                  </li>
                  <li>
                    Saint Lucia, under the International Business Companies Act,
                    Cap 12.14, Section 6, with a Certificate of Incorporation
                    issued on 01 July 2025, registered under License No.
                    2025-00478.
                  </li>
                </ul>
                <p>
                  <strong>Risk Warning:</strong> Trading leveraged products such
                  as Forex and Derivatives may not be suitable for all
                  investors, as they carry a high degree of risk to your
                  capital. Please ensure you fully understand the risks
                  involved, taking into account your investment objectives and
                  level of experience. Seek independent advice if necessary.
                  Please read the full Risk Disclosure.
                </p>
                <br></br>

                <p>
                  United International Trading Co. Ltd. does not offer services
                  to residents of certain jurisdictions, including the USA &
                  Canada.
                </p>
              </div>
              <div className="bottom-footer">
                <div className="links ">
                  <ul>
                    <li>
                      <Link href="/info/terms" passHref>
                        <a className="footer-card-links">Terms</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/info/no-deposit-bonus" passHref>
                        <a className="footer-card-links">
                          No Deposit Bonus T&C
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/info/cookie" passHref>
                        <a className="footer-card-links">Cookie Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/info/privacy-policy" passHref>
                        <a className="footer-card-links">Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/info/security-funds" passHref>
                        <a className="footer-card-links">Security of Funds</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/info/disclaimer" passHref>
                        <a className="footer-card-links">Disclaimer</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="social-links" ref={socialRef}>
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/Uitfx/"
                        target="_blank"
                        className="footer-card-links"
                        rel="noreferrer"
                      >
                        <FaFacebookF></FaFacebookF>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/uitfx_official/"
                        target="_blank"
                        className="footer-card-links"
                        rel="noreferrer"
                      >
                        <FaInstagram></FaInstagram>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/uitfx-official/"
                        target="_blank"
                        className="footer-card-links"
                        rel="noreferrer"
                      >
                        <FaLinkedin></FaLinkedin>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@uitfxofficial"
                        target="_blank"
                        className="footer-card-links"
                        rel="noreferrer"
                      >
                        <FaYoutube></FaYoutube>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/uitfx_official"
                        target="_blank"
                        className="footer-card-links"
                        rel="noreferrer"
                      >
                        <FaTwitter></FaTwitter>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center pt-md-5 mt-md-5 footer-disclaimer border-0">
                <p>
                  ©2024. United International Trading Co Ltd. All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <BackToTop></BackToTop>
    </div>
  );
};

export default Footer;
