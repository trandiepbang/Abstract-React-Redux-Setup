import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from './app';

export const makeRootReducer = (state = {}, action) => {
    // if (action.type === SESSION.LOGOUT) {
    //     state = {};
    // }

    const appReducer = combineReducers({
        app,
        form: formReducer
    });
    return appReducer(state, action);
};

export default makeRootReducer;
