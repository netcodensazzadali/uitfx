import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import copyTrading from "../../public/img/copy-trading.png";
import { trackPixel } from "../../utils/trackPixel";

const WhatIsCopyTrading = () => {
  const copyTradeButton = () => {
        trackPixel("Lead", { accountType: "Live" });
      };
  return (
    <div className="WhoWeAre Vision WhatIsMam">
      <span className="BubbleOne"></span>
      <span className="BubbleTwo"></span>
      <Container>
        <Row className="align-items-center Shape">
          <Col md={6} sm={12} xs={12}>
            <div>
              <Image
                width={505}
                priority={true}
                src={copyTrading}
                alt="Business Women"
              ></Image>
            </div>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Card>
              <div className="SectionTitleFlip">
                <span>What is</span>
                <h2>Copy Trading ?</h2>
                <p className="card-text">
                  Forex copy trading enables real-time, automated replication of
                  professional traders' (signal providers') trades by investors
                  (copiers). Newcomer or passive investors who wish to make
                  money without making their own trading judgments are drawn to
                  it. Each investor has full authority over their personal
                  account with copy trading, unlike PAMM or MAM, and can
                  initiate, halt, or modify the copying process whenever they
                  like.
                </p>
              </div>
              <span className="GlobalBtn">
                <Link
                  href="https://my.uitfx.com/create-investor-account"
                  legacyBehavior
                >
                  <a onClick={copyTradeButton} target="_blank">
                    copy trade
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
export default WhatIsCopyTrading;
