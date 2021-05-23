import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer, { IStoreState } from 'reducers/root.reducer';

const configureStore = (preloadedState: IStoreState) => {
    const store = createStore(
        rootReducer,
        preloadedState as any,
        applyMiddleware(thunkMiddleware)
    );

    return store;
};

export default configureStore;
