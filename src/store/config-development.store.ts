import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer, { IStoreState } from 'reducers/root.reducer';

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState: IStoreState) => {
    const store = createStore(
        rootReducer,
        preloadedState as any,
        // composeEnhancers(
            applyMiddleware(createLogger(), thunkMiddleware),
        // )
    );

    if ((module as any).hot) {
        // Enable Webpack hot module replacement for reducers
        (module as any).hot.accept('../reducers/root.reducer', () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
};

export default configureStore;
