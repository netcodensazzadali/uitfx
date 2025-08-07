import React from 'react';
import { Card } from 'react-bootstrap';

const StepsCardAnother = () => {
  const cardInfo = [
    {
        number: '01', title: "Open an account", subtitle:'Register with us & open a live trading account.'
    },
    {
        number: '02', title: "Verify your account", subtitle:'Verify your trading account by fulfilling the KYC procedure.'
    },
    {
        number: '03', title: "Deposit Fund", subtitle:'Deposit a minimum $50 to your trading account.'
    },
    {
        number: '04', title: "Get Bonus", subtitle:'Get a $5 sign-up bonus within one business day.'
    }
  ];
 
  return (
    <div className='StepsCard'>
       {cardInfo.map((card, index) => {
          return(
            <Card className='steps-card' key={index}>
              <div className="number">
                <span>{card.number}</span>
              </div>
              <div className="content">
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </div>
            </Card>
          )
        })}
    </div>
  )
}

export default StepsCardAnother