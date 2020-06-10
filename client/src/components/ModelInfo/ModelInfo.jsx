import React from 'react';
import './ModelInfo.scss';
import CustomImageButton from '../CustomImageButton/CustomImageButton';

const ModelInfo = () => {
  return (
    <div className='model-info'>
      <h3 className='model-title'>Model Name</h3>
      <div className='info'>
        Info
        <CustomImageButton />
      </div>
    </div>
  );
};

export default ModelInfo;
