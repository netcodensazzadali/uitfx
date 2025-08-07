
import Image from "next/image";
import React, { useEffect } from "react";
import { Card } from "react-bootstrap";

import commoditiesImage from "../../public/img/commodities.png";
import cryptoImage from "../../public/img/crypto.png";
import forexImage from "../../public/img/forex.png";
import IndicesImage from "../../public/img/indices.png";
import StockImage from "../../public/img/stock.png";



const Options = () => {
  const cardInfo = [
    { image: forexImage, title: "Forex" },
    { image: cryptoImage, title: "Crypto" },
    { image: commoditiesImage, title: "Commodities" },
    { image: IndicesImage, title: "Indices" },
    { image: StockImage, title: "Stock" },
  ];

 

  return (
    <div className="options">
      <Card>
        <Card.Body>
          {cardInfo.map((card, index) => (
            <Card.Text key={index} className="option-container">
              <span className="option-image">
                <Image
                  priority={true}
                  src={card.image}
                  alt={`${card.title} Image`}
                />
              </span>
              <span>{card.title}</span>
            </Card.Text>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Options;
