import React from 'react';
import './InfoDisplay.scss';
import ColorBlock from '../ColorBlock/ColorBlock';
import FacesBlock from '../FacesBlock/FacesBlock';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectModelResponse,
  selectIsResponseLoaded,
} from '../../redux/clarifaiModels/clarifaiModels.selectors';

const InfoDisplay = ({ locationName, modelResponse, isResponseLoaded }) => {
  console.log(modelResponse);
  return (
    <div></div>
  ); /*isResponseLoaded ? (
    <div className='info-display'>
      {locationName === 'facerecon' ? (
        <FacesBlock modelResponse={modelResponse} />
      ) : locationName === 'color' ? (
        modelResponse.map(({ ...props }, i) => (
          <ColorBlock key={i} {...props} />
        ))
      ) : locationName === 'apparel' ? (
        <div>apparel</div>
      ) : null}
    </div>
  ) : null;*/
};

const mapStateToProps = createStructuredSelector({
  modelResponse: selectModelResponse,
  isResponseLoaded: selectIsResponseLoaded,
});

export default connect(mapStateToProps)(InfoDisplay);
