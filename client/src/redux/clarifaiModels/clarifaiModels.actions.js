import clarifaiModelsActionTypes from './clarifaiModels.actionTypes';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '8a30a594afae4ebcb9d0bb35103a89a4',
});

const predictionStart = () => ({
  type: clarifaiModelsActionTypes.PREDICTION_START,
});
const predictionSucess = (response) => ({
  type: clarifaiModelsActionTypes.PREDICTION_SUCCESS,
  payload: response,
});
const predictionFailure = () => ({
  type: clarifaiModelsActionTypes.PREDICTION_FAILURE,
});

export const clearResponse = () => ({
  type: clarifaiModelsActionTypes.CLEAR_RESPONSE,
});

export const colorIdentifier = (imageUrl) => {
  return async (dispatch) => {
    dispatch(predictionStart());
    try {
      const response = await app.models.predict(Clarifai.COLOR_MODEL, imageUrl);
      const colors = response.rawData.outputs[0].data.colors;
      dispatch(predictionSucess(colors));
    } catch (error) {
      dispatch(predictionFailure(error.message));
    }
  };
};

export const faceRecognition = (imageUrl) => {
  return async (dispatch) => {
    dispatch(predictionStart());
    try {
      const response = await app.models.predict(
        Clarifai.FACE_DETECT_MODEL,
        imageUrl
      );
      const faces = response.outputs[0].data.regions;
      //console.log(faces);
      dispatch(predictionSucess(faces));
    } catch (error) {
      dispatch(predictionFailure(error.message));
    }
  };
};
