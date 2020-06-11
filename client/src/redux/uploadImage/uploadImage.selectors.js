import { createSelector } from 'reselect';

const selectUploadImage = (state) => state.uploadImage;

export const selectImageUrl = createSelector(
  [selectUploadImage],
  (uploadImage) => (uploadImage.imageUrl ? uploadImage.imageUrl : null)
);
