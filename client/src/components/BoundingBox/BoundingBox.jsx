import React from 'react';
import './BoundingBox.scss';

const BoundingBox = ({
  box: { top_row, left_col, bottom_row, right_col },
  width,
  height,
}) => {
  const top = top_row * height;
  const left = left_col * width;
  const bottom = height - bottom_row * height;
  const right = width - right_col * width;
  //console.log(width, height);
  //console.log(top, left, bottom, right);

  return (
    <div className='bounding-box' style={{ top, left, bottom, right }}></div>
  );
};

export default BoundingBox;
