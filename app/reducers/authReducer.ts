type actionType = {
    type: typeof SET_AUTH| typeof AUTH_ERROR| typeof LOG_OUT| typeof GET_CAPTCHA,
    action?: Array<string>|string,
    authInfo?: {id: number, email: string, login: string},
};
type authStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    authError: Array<string> | boolean,
    captchaURL: string | null,
};

const SET_AUTH = 'SET_AUTH';
const AUTH_ERROR = 'AUTH_ERROR';
const LOG_OUT = 'LOG_OUT';
const GET_CAPTCHA = 'GET_CAPTCHA';

let initialAuthState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    authError: false,
    captchaURL: null,
};

let authReducer = (state: authStateType = initialAuthState, action: actionType) => {
    switch(action.type) {
        case SET_AUTH:    return {...state, authError: false, isAuth: true, ...action.authInfo};
        case AUTH_ERROR:  return {...state, authError: action.action};
        case LOG_OUT:     return initialAuthState;
        case GET_CAPTCHA: return {...state, captchaURL: action.action};
        default:          return state;
    }
};

export const setAuthAC      = (authInfo: {id: number, email: string, login: string}) => ({type: SET_AUTH, authInfo: authInfo});
export const setAuthErrorAC = (error: Array<string>) => ({type: AUTH_ERROR, action: error});
export const logOutAC       = () => ({type: LOG_OUT});
export const setCaptchaAC   = (captchaURL: string) => ({type: GET_CAPTCHA, action: captchaURL});

export default authReducer;