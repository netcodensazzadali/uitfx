import React from 'react';

const SectionTitleOthers = (props) => {
  return (
    <div className="SectionTitleFlip">
      <span>{props.headingSubTitle}</span>
      <h2>{props.headingTitle}</h2>
      <p className="card-text">{props.details}</p>
    </div>
  );
};

export default SectionTitleOthers;