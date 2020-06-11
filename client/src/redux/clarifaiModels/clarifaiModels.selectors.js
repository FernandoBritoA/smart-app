import { createSelector } from 'reselect';

const selectModels = (state) => state.models;

export const selectModelResponse = createSelector([selectModels], (models) =>
  models.response ? models.response : null
);

export const selectIsResponseLoaded = createSelector(
  [selectModels],
  (models) => !!models.response
);

export const selectIsLoading = createSelector(
  [selectModels],
  (models) => models.isLoading
);
