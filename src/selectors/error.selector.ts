import { createSelector, ParametricSelector } from 'reselect';

import { HttpErrorResponseModel } from 'models/error.model';
import { IStoreState } from 'reducers/root.reducer';
import { IErrorState } from 'reducers/error.reducer';

export const selectError: ParametricSelector<IStoreState, string, HttpErrorResponseModel> = createSelector(
    (state: IStoreState) => state.error,
    (state: IStoreState, actionType: string) => actionType,
    (errorState: IErrorState, actionType: string) => {
        return errorState[actionType];
    }
);
