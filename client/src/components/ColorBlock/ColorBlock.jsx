import React from 'react';
import './ColorBlock.scss';

const ColorBlock = ({ ...props }) => {
  const {
    value,
    w3c: { hex, name },
  } = props;
  return (
    <div className='color-block' style={{ background: hex }}>
      <span className='color-info'>{name}</span>{' '}
      <span className='color-info'>{hex}</span>{' '}
      <span className='color-info'>%{Math.floor(value * 100)}</span>
    </div>
  );
};

export default ColorBlock;
