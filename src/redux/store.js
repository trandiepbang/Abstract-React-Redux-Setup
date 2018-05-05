import { compose, createStore as createReduxStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import makeRootReducer from '@src/redux/reducers';
import auth from '@src/helpers/auth.js';
import userData from '@src/helpers/userData.js';

const customMiddleWare = () => next => action => {
    if (userData._getToken() !== null && !auth._isTokenWorking()) {
        auth._logout();
        window.location.replace('/');
        return;
    }
    next(action);
};

const createStore = (initialState = {}) => {
    const store = createReduxStore(
        makeRootReducer,
        initialState,
        compose(
            applyMiddleware(customMiddleWare),
            applyMiddleware(thunk),
            // If you are using the devToolsExtension, you can add it here also
            process.env.NODE_ENV === 'development' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : f => f
        )
    );
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const reducers = require('./reducers').default;
            store.replaceReducer(reducers());
        });
    }

    return store;
};

export default createStore;
