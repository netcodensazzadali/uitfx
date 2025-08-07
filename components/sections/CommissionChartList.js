import React from 'react'
import { Card } from 'react-bootstrap'

const CommissionChartList = () => {
    const cardInfo =  [
        {
            amount: '$05', lot: 'per lot trade', level: 'Pro', levelName: 'account' 
        },
        {
            amount: '$10', lot: 'per lot trade', level: 'Classic', levelName: 'account' 
        },
        {
            amount: '$01', lot: 'per lot trade', level: 'VIP', levelName: 'account' 
        }
    ]
  return (
    <div className='CommissionChartList'>
       {cardInfo.map((card, index) => {
            return(
                <Card key={index}>
                    <Card.Body>
                        <div className='amount'>
                            <span>{card.amount}</span>
                            <span>{card.lot}</span>
                        </div>
                        <div className="amount">
                            <span>{card.level}</span>
                            <span>{card.levelName}</span>
                        </div>
                    </Card.Body>
                </Card>
            )
        })}
        
    </div>
  )
}

export default CommissionChartList