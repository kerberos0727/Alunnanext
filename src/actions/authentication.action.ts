import * as AuthenticationEffects from 'effects/authentication.effect';
import { HttpErrorResponseModel } from 'models/error.model';
import { IAction, ReduxDispatch } from 'models/action.model';
import * as ActionUtils from 'utils/action.util';

export type ActionUnion = HttpErrorResponseModel | undefined | string | any;
export const REQUEST_AUTHENTICATION_LOGIN =
    'AuthenticationActions.REQUEST_AUTHENTICATION_LOGIN';
export const REQUEST_AUTHENTICATION_LOGIN_FINISHED =
    'AuthenticationActions.REQUEST_AUTHENTICATION_LOGIN_FINISHED';

export const login = (username: string, password: string) => async (
    dispatch: ReduxDispatch<ActionUnion>
) => {
    return await ActionUtils.createThunkEffect(
        dispatch,
        REQUEST_AUTHENTICATION_LOGIN,
        AuthenticationEffects.logIn,
        username,
        password
    );
};
export const REQUEST_AUTHENTICATION_LOGOUT =
    'AuthenticationActions.REQUEST_AUTHENTICATION_LOGOUT';
export const REQUEST_AUTHENTICATION_LOGOUT_FINISHED =
    'AuthenticationActions.REQUEST_AUTHENTICATION_LOGOUT_FINISHED';

export const logout = () => async (dispatch: ReduxDispatch<ActionUnion>) => {
    return await ActionUtils.createThunkEffect(
        dispatch,
        REQUEST_AUTHENTICATION_LOGOUT,
        AuthenticationEffects.logOut
    );
};

export const REQUEST_AUTHENTICATION_SIGNUP =
    'AuthenticationActions.REQUEST_AUTHENTICATION_SIGNUP';
export const REQUEST_AUTHENTICATION_SIGNUP_FINISHED =
    'AuthenticationActions.REQUEST_AUTHENTICATION_SIGNUP_FINISHED';

export const signUp = (fields) => async (
  dispatch: ReduxDispatch<ActionUnion>
) => {
    return await ActionUtils.createThunkEffect(
        dispatch,
        REQUEST_AUTHENTICATION_SIGNUP,
        AuthenticationEffects.signUp,
        fields
    );
};

export const REQUEST_SIGNUP_CONFIRM: string =
    'AuthenticationAction.REQUEST_SIGNUP_CONFIRM';
export const REQUEST_SIGNUP_CONFIRM_FINISHED: string =
    'AuthenticationAction.REQUEST_SIGNUP_CONFIRM_FINISHED';

export const confirmSignUp = (username: string, code: string) => {
    return async (dispatch: ReduxDispatch<ActionUnion>): Promise<void> => {
        await ActionUtils.createThunkEffect<any>(
            dispatch,
            REQUEST_SIGNUP_CONFIRM,
            AuthenticationEffects.confirmSignUp,
            username,
            code,
        );
    };
};

export const REQUEST_RESEND_SIGNUP: string =
    'AuthenticationAction.REQUEST_RESEND_SIGNUP';
export const REQUEST_RESEND_SIGNUP_FINISHED: string =
    'AuthenticationAction.REQUEST_RESEND_SIGNUP_FINISHED';

export const resendSignUp = (username: string) => {
    return async (dispatch: ReduxDispatch<ActionUnion>): Promise<void> => {
        await ActionUtils.createThunkEffect<any>(
            dispatch,
            REQUEST_RESEND_SIGNUP,
            AuthenticationEffects.resendSignUp,
            username,
        );
    };
};

export const REQUEST_FORGOT_PASSWORD: string =
    'AuthenticationAction.REQUEST_FORGOT_PASSWORD';
export const forgotPassword = (username: string) => {
    return async (dispatch: ReduxDispatch<ActionUnion>): Promise<void> => {
        return await ActionUtils.createThunkEffect<any>(
            dispatch,
            REQUEST_FORGOT_PASSWORD,
            AuthenticationEffects.forgotPassword,
            username,
        );
    };
};

export const REQUEST_SUBMIT_FORGOT_PASSWORD: string =
    'AuthenticationAction.REQUEST_SUBMIT_FORGOT_PASSWORD';
export const submitForgotPassword = (
    username: string,
    password: string,
    code: string,
) => {
    return async (dispatch: ReduxDispatch<ActionUnion>): Promise<void> => {
        return await ActionUtils.createThunkEffect<any>(
            dispatch,
            REQUEST_SUBMIT_FORGOT_PASSWORD,
            AuthenticationEffects.submitForgotPassword,
            username,
            password,
            code,
        );
    };
};

export const REQUEST_CHECK_CURRENT_AUTHENTICATED_USER: string =
    'AuthenticationAction.REQUEST_CHECK_CURRENT_AUTHENTICATED_USER';
export const REQUEST_CHECK_CURRENT_AUTHENTICATED_USER_FINISHED: string =
    'AuthenticationAction.REQUEST_CHECK_CURRENT_AUTHENTICATED_USER_FINISHED';

export const checkCurrentAuthenticatedUser = () => {
    return async (dispatch: ReduxDispatch<ActionUnion>): Promise<void> => {
        return await ActionUtils.createThunkEffect<any>(
            dispatch,
            REQUEST_CHECK_CURRENT_AUTHENTICATED_USER,
            AuthenticationEffects.checkCurrentAuthenticatedUser,
        );
    };
};

export const SET_AUTHENTICATION_SIGNUP_EMAIL =
    'AuthenticationActions.SET_AUTHENTICATION_SIGNUP_EMAIL';
export const setSignUpEmail = (email?: string): IAction<string | undefined> =>
    ActionUtils.createAction(SET_AUTHENTICATION_SIGNUP_EMAIL, email);

