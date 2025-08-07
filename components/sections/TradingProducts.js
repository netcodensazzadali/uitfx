import Image from 'next/image'
import Link from 'next/link'
import { Card, Col, Container, Row } from 'react-bootstrap'
import commoditiesImage from '../../public/img/commodities-lg.png'
import cryptoImage from '../../public/img/crypto-lg.png'
import forexImage from '../../public/img/forex-lg.png'
import IndicesImage from "../../public/img/indices-lg.png"
import StockImage from "../../public/img/stock-lg.png"
import { trackPixel } from '../../utils/trackPixel'
import SectionTitle from '../titles/SectionTitle'

const TradingProducts = () => {
   const marketTradeButton = () => {
     trackPixel("Lead", { accountType: "Live" });
   };
  const cardInfo = [
    {
        image: forexImage, title: "Forex"
    },
    {
        image: cryptoImage, title: "Crypto"
    },
    {
        image: commoditiesImage, title: "Commodities"
    },
    {
        image: IndicesImage, title: "Indices"
    },
    {
        image: StockImage, title: "Stock"
    },
    
];
  return (
    <div className="trading-products background-shape">
      <Container fluid="xxl">
        <Row>
          <Col xxl={12} className="trading-title">
            <SectionTitle
              headingtitle="Trading Instruments"
              headingSubTitle="Access to the most demanding financial instruments"
            ></SectionTitle>
          </Col>
        </Row>
        <Row className="justify-content-lg-center">
          <Col xxl={11}>
            <div className="products-card">
              {cardInfo.map((card, index) => {
                return (
                  <Card key={index}>
                    <Card.Body>
                      <div className="card-image">
                        <Image
                          priority={true}
                          src={card.image}
                          alt="Trading Image"
                        ></Image>
                      </div>
                      <div className="card-content">
                        <span className="title">{card.title}</span>
                        <span className="GlobalBtn GlobalBtnOutline trade-now-btn">
                          <Link
                            href="https://my.uitfx.com/create-account"
                            legacyBehavior
                          >
                            <a target="_blank"  onClick={marketTradeButton}>
                              Trade Now
                            </a>
                          </Link>
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TradingProducts