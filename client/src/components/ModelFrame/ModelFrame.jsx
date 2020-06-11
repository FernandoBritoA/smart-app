import React from 'react';
import './ModelFrame.scss';
import ModelInfo from '../ModelInfo/ModelInfo';
import ImageDisplay from '../ImageDisplay/ImageDisplay';

const ModelFrame = () => {
  console.log('model-frame rerendered');
  return (
    <div className='model-frame'>
      <div className='image-container'>
        <ImageDisplay />
      </div>
      <div className='model-info-container'>
        <ModelInfo />
      </div>
    </div>
  );
};

export default ModelFrame;
