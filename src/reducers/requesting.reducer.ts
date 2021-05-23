import { IAction } from 'models/action.model';

export interface IRequestingState {
    readonly [key: string]: boolean;
}

const initialState: IRequestingState = {};

const reducer = (state: IRequestingState = initialState, action: IAction<any>): IRequestingState => {
    const isRequestType = action.type.includes('REQUEST_');

    if (!isRequestType) {
        return state;
    }

    const requestName = action.type.replace('_FINISHED', '');

    const isFinishedRequestType = !action.type.includes('_FINISHED');

    return {
        ...state,
        [requestName]: isFinishedRequestType
    };
}

export default reducer;