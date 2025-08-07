import Image from 'next/image'
import React from 'react'
import { Card } from 'react-bootstrap'
import CoinTwo from '../../public/img/coin-2.png'
import CoinThree from '../../public/img/coin-3.png'
import Time from '../../public/img/time.png'
import UserIcon from '../../public/img/user-icon.png'

const PammCardAnother = () => {
    const cardInfo = [
        {
            image: Time, title:"Ramp up your earnings", subTitle:"Get a share of your followers' profits, you get to set your custom commission percentage."
        },
        {
            image: UserIcon, title:"Grow your followers network", subTitle:"The more your followers grows, the greater the profit numbers you will earn."
        },
        {
            image:CoinTwo, title:"The best of both Sides", subTitle:"You can become a Strategy Manager as well as holding a personal account."
        },
        {
            image:CoinThree, title:"Competitive pricing & value", subTitle:"Open an Strategy Manager account to get  the best returns at the  best pricing."
        }
    ];
  return (
    <div className='PammCard PammCardAnother'>
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

export default PammCardAnother