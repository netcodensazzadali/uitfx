import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import pamm from "../../public/img/pamm.png";
import { trackPixel } from "../../utils/trackPixel";

const WhatIsPamm = () => {
  const becomeInvest = () => {
      trackPixel("Lead", { accountType: "Live" });
    };
  return (
    <div className="WhatIsPamm Mission WhoWeAre">
      <Container>
        <Row className="align-items-center Shape">
          <Col md={6} sm={12} xs={12}>
            <Card>
              <div className="SectionTitleFlip">
                <span>copy trade & invest</span>
                <h2>What is PAMM ?</h2>
                <p className="card-text">
                  In forex, investors can assign money to a professional trader
                  who makes transactions on their behalf using the PAMM
                  <strong className="ms-1">
                    (Percentage Allocation Management Module)
                  </strong>{" "}
                  . Investors split gains or losses according on how much they
                  contributed to the pooled fund.
                </p>
              </div>
              <span className="GlobalBtnOutline">
                <Link
                  href="https://my.uitfx.com/create-investor-account"
                  legacyBehavior
                >
                  <a onClick={becomeInvest} target="_blank">
                    Invest
                  </a>
                </Link>
              </span>
            </Card>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <div className="mb-5 mb-lg-0">
              <Image
                width={567}
                priority={true}
                layout="responsive"
                src={pamm}
                alt="Arrow"
              ></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default WhatIsPamm;
