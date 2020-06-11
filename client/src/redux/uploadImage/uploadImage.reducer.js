import uploadImageActionTypes from './uploadImage.actionTypes';

const INITIAL_STATE = {
  imageUrl: 'https://i.ibb.co/GpfCTdT/sample.jpg',
  isImageLoading: false,
  error: undefined,
};

const uploadImageReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case uploadImageActionTypes.UPLOAD_IMAGE_START:
      return {
        ...state,
        isImageLoading: true,
      };
    case uploadImageActionTypes.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        isImageLoading: false,
        imageUrl: payload,
      };
    case uploadImageActionTypes.UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        isImageLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
export default uploadImageReducer;
