import clarifaiModelsActionTypes from './clarifaiModels.actionTypes';

const INITIAL_STATE = {
  response: null,
  isLoading: false,
};

const clarifaiModelsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case clarifaiModelsActionTypes.PREDICTION_START:
      return {
        ...state,
        isLoading: true,
        response: null,
      };

    case clarifaiModelsActionTypes.PREDICTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: payload,
      };

    case clarifaiModelsActionTypes.PREDICTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        response: null,
      };

    case clarifaiModelsActionTypes.CLEAR_RESPONSE:
      return {
        ...state,
        isLoading: true,
        response: null,
      };

    default:
      return state;
  }
};
export default clarifaiModelsReducer;
