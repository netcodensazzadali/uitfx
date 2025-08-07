import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import UITFXMarketLogo from '../../public/img/logo.png';
import { trackPixel } from "../../utils/trackPixel";

const NavigationBar = () => {
  const clientLoginLink = () => {
    trackPixel("Lead", { accountType: "Live" });
  };
  const registrationLink = () => {
    trackPixel("Lead", { accountType: "Live" });
  };
  const [navOpen, setNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  function toggleNav() {
    setNavOpen((state) => !state);
  }
    useEffect(() => {
      const handleScroll = () => {
        const currentScroll = window.scrollY;
        setIsSticky(currentScroll > 50); // Adjust the value based on when you want the sticky state to activate
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div className={`navigationBar ${isSticky ? "sticky" : ""}`}>
      <Navbar expand="lg" sticky="top" className={isSticky ? "scrolled" : ""}>
        <Container className="navbar-container" fluid="xxl">
          <Link href="/">
            <Navbar.Brand onClick={toggleNav}>
              <Image
                width={120}
                height={80}
                src={UITFXMarketLogo}
                alt="UITFX Logo"
              />
            </Navbar.Brand>
          </Link>

          <button
            onClick={toggleNav}
            className={navOpen ? "navbar-toggler" : "navbar-toggler collapsed"}
            type="button"
            aria-controls="navbarNav"
            aria-expanded={navOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Navbar.Collapse
            className={`${
              navOpen
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }`}
            id="navbarNav"
          >
            <Nav className="ms-auto my-2 my-lg-0">
              <NavDropdown
                title="About"
                className="theme-dropdown"
                id="basic-nav-dropdown"
                renderMenuOnMount={true}
              >
                <Link href="/about/company" passHref>
                  <NavDropdown.Item onClick={toggleNav}>
                    Company
                  </NavDropdown.Item>
                </Link>
                <Link href="/about/faqs" passHref>
                  <NavDropdown.Item onClick={toggleNav}>FAQ's</NavDropdown.Item>
                </Link>
                <Link href="/about/tools-analysis" passHref>
                  <NavDropdown.Item onClick={toggleNav}>
                    Tools & Analysis
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Link href="/accounts" passHref>
                <Nav.Link className="single-link" onClick={toggleNav}>
                  Accounts
                </Nav.Link>
              </Link>
              <Link href="/market" passHref>
                <Nav.Link className="single-link" onClick={toggleNav}>
                  Market
                </Nav.Link>
              </Link>
              <Link href="/platforms" passHref>
                <Nav.Link className="single-link" onClick={toggleNav}>
                  Platforms
                </Nav.Link>
              </Link>
              <NavDropdown
                title="PAMM"
                className="theme-dropdown"
                id="basic-nav-dropdown"
                renderMenuOnMount={true}
              >
                <Link href="/pamm/copy-trade" passHref>
                  <NavDropdown.Item onClick={toggleNav}>
                    Copy Trade & Invest
                  </NavDropdown.Item>
                </Link>
                <Link href="/pamm/pamm-investor" passHref>
                  <NavDropdown.Item onClick={toggleNav}>
                    PAMM Investor
                  </NavDropdown.Item>
                </Link>
                <Link href="/pamm/pamm-manager" passHref>
                  <NavDropdown.Item onClick={toggleNav}>
                    PAMM Manager
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown
                title="Promotion"
                className="theme-dropdown"
                id="basic-nav-dropdown"
                renderMenuOnMount={true}
              >
                <Link href="/promotion/no-deposit-bonus" passHref>
                  <NavDropdown.Item onClick={toggleNav}>
                    No Deposit Bonus
                  </NavDropdown.Item>
                </Link>
                <Link href="/promotion/sign-up-bonus" passHref>
                  <NavDropdown.Item onClick={toggleNav}>
                    Sign Up Bonus
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Link href="/partnership" passHref>
                <Nav.Link className="single-link" onClick={toggleNav}>
                  Partnership
                </Nav.Link>
              </Link>
              <Link href="https://my.uitfx.com" passHref>
                <Nav.Link
                  className="single-link"
                  style={{ fontWeight: "bold", color: "#049ee9" }}
                  onClick={clientLoginLink}
                  target="_blank"
                >
                  Login
                </Nav.Link>
              </Link>
              <Link href="https://my.uitfx.com/create-account" passHref>
                <Nav.Link
                  className="single-link"
                  onClick={registrationLink}
                  style={{ fontWeight: "bold", color: "#049ee9" }}
                  target="_blank"
                >
                  Registration
                </Nav.Link>
              </Link>
              {/* <NavDropdown
                align={{ md: "end" }}
                title="USER ACCESS"
                className="theme-dropdown user-button"
                id="basic-nav-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item
                  as="a"
                  href="https://my.uitfx.com"
                  target="_blank"
                  onClick={TradeNow}
                >
                  Client Login
                </NavDropdown.Item>
                <NavDropdown.Item
                  as="a"
                  href="https://my.uitfx.com/create-account"
                  target="_blank"
                  onClick={TradeNow}
                >
                  Registration
                </NavDropdown.Item>

                <Link href="https://my.uitfx.com/create-account" passHref>
                  <NavDropdown.Item onClick={toggleNav}>
                    Registration
                  </NavDropdown.Item>
                </Link>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <style jsx>{`
        .navigationBar {
          transition: all 0.3s ease-in-out;
        }

        .navigationBar.sticky {
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          background: white;
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: all 0.3s ease-in-out;
        }

        .navbar-container {
          transition: transform 0.3s ease-in-out;
        }

        .navigationBar.sticky .navbar-container {
          transform: translateY(0);
        }

        .navigationBar .scrolled {
          background-color: #fff;
          transition: background-color 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default NavigationBar