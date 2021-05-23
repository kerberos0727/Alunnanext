import { IAction } from 'models/action.model';
import { withBaseReducer } from 'utils/reducer.util';
import * as AuthenticationActions from 'actions/authentication.action';

export interface IAuthenticaitonState {
    isLoggedIn?: boolean;
    signUpInfo?: any;
    currentAuthenticatedUser?: any;
    signUpConfirmInfo?: any;
    pedingingSignUpEmail?: string;
}

const initialState: IAuthenticaitonState = {
    isLoggedIn: false,
};

const reducer = (
    state: IAuthenticaitonState = initialState,
    action: IAction<AuthenticationActions.ActionUnion>,
): IAuthenticaitonState => {
    switch (action.type) {
        case AuthenticationActions.REQUEST_AUTHENTICATION_LOGIN: {
            return {
                ...state,
                isLoggedIn: true,
            };
        }
        case AuthenticationActions.REQUEST_AUTHENTICATION_LOGOUT_FINISHED: {
            return initialState;
        }
        case AuthenticationActions.REQUEST_AUTHENTICATION_SIGNUP_FINISHED: {
            return {
                ...state,
                signUpInfo: action.payload,
            };
        }
        case AuthenticationActions.REQUEST_CHECK_CURRENT_AUTHENTICATED_USER_FINISHED: {
            return {
                ...state,
                currentAuthenticatedUser: action.payload,
                isLoggedIn: true,
            };
        }
        case AuthenticationActions.REQUEST_SIGNUP_CONFIRM_FINISHED: {
            return {
                ...state,
                signUpConfirmInfo: action.payload,
            };
        }
        case AuthenticationActions.SET_AUTHENTICATION_SIGNUP_EMAIL: {
            return {
                ...state,
                pedingingSignUpEmail: action.payload
            }
        }
        // case AuthenticationActions.REQUEST_CHECK_CURRENT_AUTHENTICATED_USER_FINISHED: {
        //     return {
        //         ...state,
        //         currentAuthenticatedUser: action.payload,
        //         isLoggedIn: true,
        //     };
        // }
        // case AuthenticationActions.REQUEST_SIGNUP_CONFIRM_FINISHED: {
        //     return {
        //         ...state,
        //         signUpConfirmInfo: action.payload,
        //     };
        // }
        default:
            return state;
    }
};

export default withBaseReducer(reducer);
