import Image from 'next/image'
import React from 'react'
import { Card } from 'react-bootstrap'
import CoinTwo from '../../public/img/coin-2.png'
import CoinThree from '../../public/img/coin-3.png'
import Time from '../../public/img/time.png'
import UserIcon from '../../public/img/user-icon.png'

const PammCard = () => {
    const cardInfo = [
        {
            image: Time, title:"You will have more time", subTitle:"Copy trade & spend your valuable time on other things. Your Strategy Manager will do the trading for you."
        },
        {
            image: UserIcon, title:"No trading skills?", subTitle:"Don’t worry. Copy the strategies of our experienced traders and no need to take the hassle of analyzing."
        },
        {
            image:CoinTwo, title:"Let your money work for you", subTitle:"Retain full control of your money at all times. Pay a small fee when your Strategy Manager makes a profit."
        },
        {
            image:CoinThree, title:"Competitive pricing & value", subTitle:"Strategy Managers benefit from the lowest spreads on major FX pairs on the Advantage account"
        }
    ];
  return (
    <div className='PammCard'>
        {cardInfo.map((card, index) => {
            return(
                <Card key={index}>
                    <Card.Body>
                        <div className="card-image">
                            <Image src={card.image} alt="bitcoin"></Image>
                        </div>
                        <h1>{card.title}</h1>
                        <p>{card.subTitle}</p>
                    </Card.Body>
                </Card>
            )
        })}
    </div>
  )
}

export default PammCard