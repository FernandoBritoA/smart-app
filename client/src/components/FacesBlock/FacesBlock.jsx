import React from 'react';
import './FacesBlock.scss';

const FacesBlock = ({ modelResponse }) => {
  return (
    <div className='faces-block'>Faces detected: {modelResponse.length}</div>
  );
};

export default FacesBlock;
