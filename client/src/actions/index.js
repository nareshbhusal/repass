import { CHANGE_THEME, LOGIN } from './types';
import axios from 'axios';

export const changeTheme = () => {
    return {
        type: 'CHANGE_THEME'
    }
}

export const userLogin = () => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:5000/login`);
        dispatch({
            type: LOGIN,
            payload: res.data
        });
    } catch {
        console.log(err);
    }
}