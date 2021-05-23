import { createSelector, ParametricSelector } from 'reselect';
import { IStoreState } from 'reducers/root.reducer';
import { IRequestingState } from 'reducers/requesting.reducer';

export const selectRequesting: ParametricSelector<IStoreState, string, boolean> = createSelector(
    (state: IStoreState) => state.requesting,
    (state: IStoreState, actionType: string) => actionType,
    (requestingState: IRequestingState, actionType: string) => requestingState[actionType]
)