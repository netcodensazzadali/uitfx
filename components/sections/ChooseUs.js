import Image from "next/image";
import { useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CoinOne from "../../public/img/coin-1.png";
import CoinTwo from "../../public/img/coin-2.png";
import CoinThree from "../../public/img/coin-3.png";
import SectionTitleFlip from "../titles/SectionTitleFlip";

const ChooseUs = () => {
  const wrapperRef = useRef(null);

  const cardInfo = [
    {
      image: CoinOne,
      title: "Always Fair, Always Transparent",
      subTitle:
        "We believe in fairness and transparency, offering you full clarity on our charges. You’ll always know exactly what it costs to trade with us.",
    },
    {
      image: CoinTwo,
      title: "Favorable Conditions For You",
      subTitle:
        "Access the financial markets with an account designed for your needs, and benefit from ideal conditions and lightning-fast execution speeds.",
    },
    {
      image: CoinThree,
      title: "Putting Clients Above All",
      subTitle:
        "Our 24/7 multilingual customer support team is here to provide you assistance whenever you need it.",
    },
  ];

  return (
    <div className="choose-us" ref={wrapperRef}>
      <Container>
        <Row>
          <Col xl={12} className="text-center">
            <SectionTitleFlip
              headingtitle="Experience trading with a difference"
              headingSubTitle="Why trade with us"
            ></SectionTitleFlip>
          </Col>
        </Row>
        <Row>
          <Col xxl={12}>
            <div className="choose-us-listing">
              {cardInfo.map((card, index) => (
                <Card className="chooseUs-card" key={index}>
                  <Card.Body>
                    <div className="card-image">
                      <Image src={card.image} alt="bitcoin"></Image>
                    </div>
                    <h1>{card.title}</h1>
                    <p>{card.subTitle}</p>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
        {/* <Row className="mt-5 pt-5">
          <Col xl={12} className="text-center">
            <SectionTitleFlip
              headingtitle="Saint Lucia Certified Incorporation"
              headingSubTitle="UIT FX Ltd. No. 2025-00478"
            ></SectionTitleFlip>
          </Col>
        </Row> */}
        {/* <Row>
          <Col xxl={12} className="text-center">
            <Image
              src="/img/certificate.png"
              alt="Certificate"
              width={321}
              height={291}
              priority
            />
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default ChooseUs;
