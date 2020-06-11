import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import {
  faceRecognition,
  clearResponse,
} from '../../redux/clarifaiModels/clarifaiModels.actions';
import { createStructuredSelector } from 'reselect';
import { selectImageUrl } from '../../redux/uploadImage/uploadImage.selectors';

const FaceRecognition = ({ faceRecognition, imageUrl, clearResponse }) => {
  useEffect(() => {
    console.log('face-recon-mounted');
    if (imageUrl) {
      //faceRecognition(imageUrl);
    }
    return () => clearResponse();
  }, [faceRecognition, imageUrl, clearResponse]);

  return <div></div>;
};

const mapDispatchToProps = (dispatch) => ({
  faceRecognition: (imageUrl) => dispatch(faceRecognition(imageUrl)),
  clearResponse: () => dispatch(clearResponse()),
});

const mapStateToProps = createStructuredSelector({
  imageUrl: selectImageUrl,
});

export default connect(mapStateToProps, mapDispatchToProps)(FaceRecognition);
