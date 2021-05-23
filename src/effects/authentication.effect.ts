import { Auth } from 'aws-amplify';
import { toHttpErrorModel } from 'utils/http.util';

export const logIn = async (username: string, password: string): Promise<any> => {
    try {
        const authenticatedUser = await Auth.signIn(username, password);
        return authenticatedUser;
    } catch (error) {
        return toHttpErrorModel(error);
    }
};
export const logOut = async (): Promise<any> => {
    try {
        const loggedOutUser = await Auth.signOut();
        return loggedOutUser;
    } catch (error) {
        return toHttpErrorModel(error);
    }
};

export const signUp = async (
    fields
): Promise<any> => {
    try {
        const signUpInfo = await Auth.signUp(
            {
                username: fields.username,
                password: fields.password,
                attributes: {
                    given_name: fields.given_name,
                    family_name: fields.family_name,
                    email: fields.username,
                    "custom:middleName": fields.middle_name
                }
            }
        );
        return signUpInfo;
    } catch (err) {
        return toHttpErrorModel(err);
    }
};

export const signOut = async (): Promise<any> => {
    try {
        const signOutInfo = await Auth.signOut();
        return signOutInfo;
    } catch (err) {
        return toHttpErrorModel(err);
    }
};

export const confirmSignUp = async (
    username: string,
    code: string,
): Promise<any> => {
    try {
        const verificationAuthInfo = await Auth.confirmSignUp(username, code);
        return verificationAuthInfo;
    } catch (err) {
        return toHttpErrorModel(err);
    }
};
export const resendSignUp = async (username: string): Promise<any> => {
    try {
        const resendConfirmSignUpInfo = await Auth.resendSignUp(username);
        return resendConfirmSignUpInfo;
    } catch (err) {
        return toHttpErrorModel(err);
    }
};
export const forgotPassword = async (username: string): Promise<any> => {
    try {
        const forgotPasswordInfo = await Auth.forgotPassword(username);
        return forgotPasswordInfo;
    } catch (err) {
        return toHttpErrorModel(err);
    }
};
export const submitForgotPassword = async (
    username: string,
    password: string,
    code: string,
): Promise<any> => {
    try {
        const submitForgotPasswordInfo = await Auth.forgotPasswordSubmit(
            username,
            password,
            code,
        );
        return submitForgotPasswordInfo;
    } catch (err) {
        return toHttpErrorModel(err);
    }
};

export const checkCurrentAuthenticatedUser = async (): Promise<any> => {
    try {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(null);
            }, 1000);
        });
        const authenticatedUser = await Auth.currentAuthenticatedUser();
        return authenticatedUser;
    } catch (err) {
        return toHttpErrorModel(new Error(err));
    }
};
