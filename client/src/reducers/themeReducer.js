import { CHANGE_THEME } from '../actions/types';

const defaultTheme = 'light';

const themeReducer  = (theme=defaultTheme, action) => {
    if (action.type === CHANGE_THEME) {
        if (theme === 'light') {
            return { state, theme: 'dark'};
        } else {
            return { state, theme: 'light'}
        }
    }
    return theme;
}

export default themeReducer;