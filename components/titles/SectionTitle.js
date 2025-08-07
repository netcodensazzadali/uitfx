import React from 'react'

const SectionTitle = (props) => {
  return (
    <div className='SectionTitle'>
        <h1>{props.headingtitle}</h1>
        <p>{props.headingSubTitle}</p>
    </div>
  )
}

export default SectionTitle