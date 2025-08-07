
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import SectionTitleFlip from "../titles/SectionTitleFlip";



const StepsSection = () => {
  

  const cardInfo = [
    {
      number: "01",
      title: "Register",
      subtitle: "Complete the sign-up form & open your live trading account",
    },
    {
      number: "02",
      title: "Verify",
      subtitle: "Upload your documents to verify your account",
    },
    {
      number: "03",
      title: "Fund",
      subtitle: "Login to your account and fund your account",
    },
    {
      number: "04",
      title: "Trade",
      subtitle: "Download MT5 & use your account and start trading",
    },
  ];

 

  return (
    <div className="steps-section bg-white">
      <Container>
        <Row className="mb-3">
          <Col xxl={12} className="text-center mb-3">
            <SectionTitleFlip
              headingSubTitle="Seize every opportunity"
              headingtitle="Start trading with UITFX with easy steps"
            ></SectionTitleFlip>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xxl={7}>
            {cardInfo.map((card, index) => (
              <Card
                className="steps-card"
                key={index}
                
              >
                <div
                  className="number"
                  
                >
                  <span>{card.number}</span>
                </div>
                <div className="content">
                  <h3
                    
                  >
                    {card.title}
                  </h3>
                  <p>
                    {card.subtitle}
                  </p>
                </div>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
      {/* {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`bubble bubble${i + 1}`}
          style={{
            position: "absolute",
            borderRadius: "50%",
            
           
            top: `${i * 15}%`,
            left: `${i * 10}%`,
          }}
        ></span>
      ))} */}
    </div>
  );
};

export default StepsSection;
