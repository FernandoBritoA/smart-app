import React from 'react';
import './CustomImageButton.scss';

const CustomImageButton = () => {
  return (
    <div className='custom-image-button'>
      <input
        type='file'
        name='image'
        id='images'
        accept='image/*'
        className='hidden'
      />
      <label className='image-input' htmlFor='images'>
        <i className='fa fa-file-image-o icon' aria-hidden='true' /> Select
        Image
      </label>
    </div>
  );
};

export default CustomImageButton;
