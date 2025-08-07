import React from 'react'

const SectionTitleFlipListing = (props) => {
  return (
    <div className='SectionTitleFlip'>
        <span>{props.headingSubTitle}</span>
        <h2>{props.headingTitle}</h2>
        <ul>
          <li>{props.listingOne}</li>
          <li>{props.listingTwo}</li>
          <li>{props.listingThree}</li>
          <li>{props.listingFour}</li>
          <li>{props.listingFive}</li>
          <li>{props.listingSix}</li>
        </ul>
    </div>
  )
}

export default SectionTitleFlipListing