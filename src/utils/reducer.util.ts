import { IAction } from 'models/action.model';


export const withBaseReducer = <T>(reducer: (state: T, action: IAction<any>) => T) => {
    return (state: T, action: IAction<any>) => {
        if (action.error) {
            return state;
        }

        return reducer(state, action);
    }
}