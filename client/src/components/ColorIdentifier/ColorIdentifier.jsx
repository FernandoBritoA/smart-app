import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import {
  colorIdentifier,
  clearResponse,
} from '../../redux/clarifaiModels/clarifaiModels.actions';
import { createStructuredSelector } from 'reselect';
import { selectImageUrl } from '../../redux/uploadImage/uploadImage.selectors';

const ColorIdentifier = ({ colorIdentifier, imageUrl, clearResponse }) => {
  useEffect(() => {
    if (imageUrl) {
      //colorIdentifier(imageUrl);
    }
    return () => clearResponse();
  }, [colorIdentifier, imageUrl, clearResponse]);
  return <div></div>;
};

const mapDispatchToProps = (dispatch) => ({
  colorIdentifier: (imageUrl) => dispatch(colorIdentifier(imageUrl)),
  clearResponse: () => dispatch(clearResponse()),
});

const mapStateToProps = createStructuredSelector({
  imageUrl: selectImageUrl,
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorIdentifier);
