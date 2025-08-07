import React from "react";
import { Card } from "react-bootstrap";

const StepsCardForPartnership = () => {
  const cardInfo = [
    {
      number: "01",
      title: "Register",
      subtitle: "Register as a client with us & apply for IB",
    },
    {
      number: "02",
      title: "Grow Client Network",
      subtitle: "Invite clients to our platform",
    },
    {
      number: "03",
      title: "Get Commission",
      subtitle: "Get commission whenever the client trades.",
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

export default StepsCardForPartnership;
