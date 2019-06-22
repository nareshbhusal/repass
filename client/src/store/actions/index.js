import { CHANGE_THEME, LOGIN, LOGOUT } from '../types';
import repass from '../../repass';

export const changeTheme = () => {
    return {
        type: CHANGE_THEME
    }
}

export const userLogin = (username) => {
    return {
        type: LOGIN,
        payload: username
    };
}

export const userLogout = () => async (dispatch) => {
    try {
        const res = await repass.post('logout');
        console.log(res.data);
        dispatch({
            type: LOGOUT
        })
    } catch(err) {
        console.log(err.response);
        alert(err.response.data.err); // alert error
    }
}