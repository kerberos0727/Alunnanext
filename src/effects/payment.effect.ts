import { RouterPathName } from 'constants/routes.constant';
import { HttpErrorResponseModel } from 'models/error.model';
import * as HttpUtils from 'utils/http.util';
export const checkoutPayment = async (courseId: string): Promise<any> => {
    const endpoint = '/payments/create-session/' + courseId;
    const successUrl = window.location.origin + RouterPathName.ThankYou;
    const cancelUrl = window.location.origin + RouterPathName.NoPayment;

    const session = await HttpUtils.post(endpoint, {
        success_url: successUrl,
        cancel_url: cancelUrl,
    });

    if (session instanceof HttpErrorResponseModel) {
        return session;
    }

    return session;
};
