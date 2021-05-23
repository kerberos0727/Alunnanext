
import { IAction } from 'models/action.model';
import * as ErrorAction from 'actions/error.action';
import { HttpErrorResponseModel } from 'models/error.model';

export interface IErrorState {
    readonly [key: string]: HttpErrorResponseModel;
}

const initialState: IErrorState = {};

const errorReducer = (state: IErrorState = initialState, action: IAction<any>): IErrorState => {
    const { type, error, payload } = action;

    /*
    * Removes an HttpErrorResponseModel by it's id that is in the action payload.
    */
    if (type === ErrorAction.REMOVE) {
        return Object.entries(state).reduce((newState: any, [key, value]: [string, HttpErrorResponseModel]) => {
            if (value.id !== payload) {
                newState[key] = value;
            }

            return newState;
        }, {});
    }

    if (type === ErrorAction.CLEAR_ALL) {
        return initialState;
    }

    const isFinishedRequestType = type.includes('_FINISHED');
    const isStartRequestType = type.includes('REQUEST_') && !isFinishedRequestType;

    if (isStartRequestType) {
        const { [`${type}`]: value, ...stateWithoutFinishedType } = state;

        return stateWithoutFinishedType;
    }

    const isError: boolean = isFinishedRequestType && Boolean(error);

    if (!isError) {
        return state;
    }

    return {
        ...state,
        [`${type.replace('_FINISHED', '')}`]: payload,
    };
};

export default errorReducer;
