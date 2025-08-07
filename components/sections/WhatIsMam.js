import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import mam from "../../public/img/mam.png";
import { trackPixel } from '../../utils/trackPixel';

const WhatIsMam = () => {
  const becomeManager = () => {
    trackPixel("Lead", { accountType: "Live" });
  };

  return (
    <div className="WhoWeAre WhatIsMam">
      <span className="BubbleOne"></span>
      <span className="BubbleTwo"></span>
      <Container>
        <Row className="align-items-center Shape">
          <Col md={6} sm={12} xs={12}>
            <div>
              <Image
                width={546}
                priority={true}
                layout="responsive"
                src={mam}
                alt="Business Women"
              ></Image>
            </div>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Card>
              <div className="SectionTitleFlip">
                <span>copy trade & invest</span>
                <h2>What is MAM ?</h2>
                <p className="card-text">
                  In forex, MAM{" "}
                  <strong className="font-weight-bold ms-1">
                    {" "}
                    (Multi-Account Manager){" "}
                  </strong>
                  is specialized software that enables fund managers or expert
                  traders to effectively handle several trading accounts from a
                  single platform. Copy trading, shared fund management, and
                  simplified account management are among its many uses.
                </p>
              </div>
              <span className="GlobalBtn">
                <Link href="https://my.uitfx.com/create-manager-account" legacyBehavior>
                  <a
                    onClick={becomeManager}
                    target="_blank"
                  >
                    become a manager
                  </a>
                </Link>
              </span>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default WhatIsMam;
