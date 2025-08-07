import React from "react";
import { Card } from "react-bootstrap";

const StepsCard = () => {
  const cardInfo = [
    {
      number: "01",
      title: "Open an account",
      subtitle: "Register with us & open a live trading account.",
    },
    {
      number: "02",
      title: "Verify your account",
      subtitle: "Verify your trading account by fulfilling the KYC procedure.",
    },
    {
      number: "03",
      title: "Get Bonus",
      subtitle: "Get a $10 no deposit bonus & start trading.",
    },
  ];

  return (
    <div className="StepsCard">
      {cardInfo.map((card, index) => {
        return (
          <Card className="steps-card" key={index}>
            <div className="number">
              <span>{card.number}</span>
            </div>
            <div className="content">
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default StepsCard;
