import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import authReducer from './authReducer';

export default combineReducers({
    theme: themeReducer,
    user: authReducer
})