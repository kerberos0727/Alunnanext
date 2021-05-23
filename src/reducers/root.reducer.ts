import { combineReducers } from 'redux';
import requestingReducer, { IRequestingState } from './requesting.reducer';
import errorReducer, { IErrorState } from './error.reducer';
import courseReducer, { ICourseState } from './course.reducer';
import authenticationReducer, { IAuthenticaitonState } from './authentication.reducer';

export interface IStoreState {
    requesting: IRequestingState;
    error: IErrorState;
    courses: ICourseState;
    authentication: IAuthenticaitonState;
}

export const rootReducer = combineReducers({
    requesting: requestingReducer,
    error: errorReducer,
    courses: courseReducer,
    authentication: authenticationReducer,
});

export default rootReducer;