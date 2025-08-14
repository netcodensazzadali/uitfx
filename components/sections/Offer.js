import Image from "next/image";
import { useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { trackPixel } from "../../utils/trackPixel";
import SectionTitleFlip from "../titles/SectionTitleFlip";

const Offer = () => {
  const wrapperRef = useRef(null);
  const NoDepositBonusLink = () => {
         trackPixel("Lead", { accountType: "Live" });
       };

  return (
    <div className="choose-us bg-white py-5" ref={wrapperRef}>
      <Container>
        <Row>
          <Col xl={12} className="text-center pt-5">
            <SectionTitleFlip
              headingtitle="14  August - is the Last Date"
              headingSubTitle="for claiming 10 USD no deposit bonus"
            ></SectionTitleFlip>
          </Col>
        </Row>
        <Col xxl={12} className="text-center">
          <Image
            src="/img/10.png"
            alt="Certificate"
            width={356}
            height={223}
            priority
          />
        </Col>
        <Row>
          <Col lg={12} className="text-center mt-0">
            <Card.Text className="banner-links mt-5 py-5">
              <Card.Link
                href="https://my.uitfx.com/"
                onClick={NoDepositBonusLink}
                target="_blank"
                className="GlobalBtn"
              >
                Get $10 no deposit bonus
              </Card.Link>
            </Card.Text>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Offer;
