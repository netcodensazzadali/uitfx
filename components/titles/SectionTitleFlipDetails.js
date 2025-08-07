import React from 'react';

const SectionTitleFlipDetails = (props) => {
  return (
    <div className="SectionTitleFlip">
      <span>{props.headingSubTitle}</span>
      <h2>{props.headingTitle}</h2>
      <ul>
        <li>{props.TitleOne}</li>
        <li>{props.TitleTwo}</li>
        <li>{props.TitleThree}</li>
        <li>{props.TitleFour}</li>
        <li>{props.TitleFive}</li>
      </ul>
    </div>
  );
}

export default SectionTitleFlipDetails