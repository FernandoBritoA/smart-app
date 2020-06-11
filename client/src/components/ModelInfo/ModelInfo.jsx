import React from 'react';
import './ModelInfo.scss';
import { withRouter } from 'react-router-dom';
import CustomImageButton from '../CustomImageButton/CustomImageButton';
import InfoDisplay from '../InfoDisplay/InfoDisplay';
import WithSpinner from '../WithSpinner/WithSpinner';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsLoading } from '../../redux/clarifaiModels/clarifaiModels.selectors';
import { compose } from 'redux';

const InfoDisplayWithSpinner = WithSpinner(InfoDisplay);

const ModelInfo = ({ location, isLoading }) => {
  const locationName = location.pathname.replace('/models/', '');
  let modelName;
  switch (locationName) {
    case 'color':
      modelName = 'Color Identifier';
      break;
    case 'facerecon':
      modelName = 'Face Recognition';
      break;
    case 'apparel':
      modelName = 'Apparel Detctor';
      break;
    default:
      break;
  }
  //console.log(isLoading);

  return (
    <div className='model-info'>
      <h3 className='model-title'>{modelName}</h3>
      <div className='info'>
        <InfoDisplayWithSpinner
          isLoading={isLoading}
          locationName={locationName}
        />
        <CustomImageButton />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

export default compose(withRouter, connect(mapStateToProps))(ModelInfo);
