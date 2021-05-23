import * as ActionUtils from 'utils/action.util';
import * as PaymentEffects from 'effects/payment.effect';

export const REQUEST_PAYMENT_CHECKOUT =
    'PaymentActions.REQUEST_PAYMENT_CHECKOUT';
export const REQUEST_PAYMENT_CHECKOUT_FINISHED =
    'PaymentActions.REQUEST_PAYMENT_CHECKOUT_FINISHED';

export const checkoutPayment = (courseId: string) => async (dispatch: any) => {
    return await ActionUtils.createThunkEffect(
        dispatch,
        REQUEST_PAYMENT_CHECKOUT,
        PaymentEffects.checkoutPayment,
        courseId
    );
};
