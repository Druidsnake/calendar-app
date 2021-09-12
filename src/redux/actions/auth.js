import { fetchConToken, fetchSinToken } from "../../helpers/fetch";
import { types } from "../../types/types";
import Swal from 'sweetalert2'
import { logoutEvent } from "./calendar";

export const startLogin = ( email, password ) => {
    return async (dispatch) => {

        const resp = await fetchSinToken('auth', {email, password}, 'POST');
        const body = await resp.json();

        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch( login({
                uid: body.uid,
                name: body.name
            }))

        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

const login = (user) => ({
    type: types.authLogin,
    payload: user
})

const logout = () => ({
    type: types.authLogout
})

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch( logout() );
        dispatch( logoutEvent() );
    }
}
export const startRegister = (name, email, password) => {
    return async (dispatch) => {

        const resp = await fetchSinToken('auth/new', { name, email, password }, 'POST');
        const body = await resp.json();

        if(body.ok ){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name
            }))
        } else{
            return Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startChecking = () => {
    return async (dispatch) => {

        if (!!localStorage.getItem('token')){
            const resp = await fetchConToken('auth/renew');
            const body = await resp.json();

            if (body.ok) {
                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());

                dispatch(login({
                    uid: body.uid,
                    name: body.name
                }))
            } else {
                dispatch(checkingFinish())
            }
        }
        dispatch(checkingFinish())
    }
}

const checkingFinish = () => ({
    type: types.authCheckingFinish
})