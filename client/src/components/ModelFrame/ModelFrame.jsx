import React from 'react';
import './ModelFrame.scss';
import ModelInfo from '../ModelInfo/ModelInfo';
import sample from '../../images/sample.jpg';

const ModelFrame = () => {
  return (
    <div className='model-frame'>
      <div className='image-container'>
        <img src={sample} alt='' className='image-display' />
      </div>
      <div className='model-info-container'>
        <ModelInfo />
      </div>
    </div>
  );
};

export default ModelFrame;
