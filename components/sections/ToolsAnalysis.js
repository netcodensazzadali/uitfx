import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import tools1 from "../../public/img/tools-1.png";
import tools2 from "../../public/img/tools-2.png";
import tools3 from "../../public/img/tools-3.png";
import tools4 from "../../public/img/tools-4.png";
import tools5 from "../../public/img/tools-5.png";
import tools6 from "../../public/img/tools-6.png";
 
const ToolsAnalysis = () => {
  return (
    <div className="WhoWeAre tools">
      <span className="BubbleOne"></span>
      <span className="BubbleTwo"></span>
      <Container>
        <Row className="align-items-center Shape">
          <Col md={12} sm={12} xs={12} className="mb-5">
            <h1>Trading Tools</h1>
            <ul >
              <li>
                <div className="custom-picture">
                  <Image
                    src={tools1}
                    width={322}
                    priority={true}
                    alt="tools1"
                  ></Image>
                </div>

                <Link href="#Calendar" scroll={false}>Economic Calendar</Link>
              </li>
              <li>
                <div className="custom-picture">
                  <Image
                    src={tools2}
                    width={244}
                    priority={true}
                    
                    alt="tools2"
                  ></Image>
                </div>
                <Link href="#pipCalculator"  scroll={false}>Pip Calculator</Link>
              </li>
              <li>
                <div className="custom-picture">
                  <Image
                    src={tools3}
                    width={282}
                    priority={true}
                    
                    alt="tools3"
                  ></Image>
                </div>
                <Link href="#CurrencyConverter" scroll={false}>Currency Converter</Link>
              </li>
            </ul>
          </Col>
          <Col md={12} sm={12} xs={12}>
            <h1>Trading Analytics</h1>
            <ul>
              <li>
              <div className="custom-picture">
                  <Image
                    src={tools4}
                    width={238}
                    priority={true}
                    
                    alt="tools4"
                  ></Image>
                </div>
                <Link href="#News" scroll={false}>Economic News</Link>
              </li>
              <li>
              <div className="custom-picture">
                  <Image
                    src={tools5}
                    width={195}
                    priority={true}
                    
                    alt="tools5"
                  ></Image>
                </div>
                <Link href="#MarketResearch" scroll={false}>Market Research</Link>
              </li>
              <li>
              <div className="custom-picture">
                  <Image
                    src={tools6}
                    width={264}
                    priority={true}
                    
                    alt="tools6"
                  ></Image>
                </div>
                <Link href="#TradingHours" scroll={false}>Trading Hours</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ToolsAnalysis;
