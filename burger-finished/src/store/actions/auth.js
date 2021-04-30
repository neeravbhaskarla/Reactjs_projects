import * as actionTypes from './actionTypes'
import axios from 'axios'

const authStart = () =>{
    return{
        type: actionTypes.AUTH_START
    }
}
const authSuccess = (token,userId) =>{
    return{
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}
const authFail = (error)=>{
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}
export const authLogout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('expirationTime')
    localStorage.removeItem('userId')
    return{
        type: actionTypes.AUTH_LOGOUT
    }
}
const checkAuthTimeOut=(expirationTime)=>{
    return dispatch=>{
        setTimeout(() => {
                dispatch(authLogout())
        }, expirationTime*1000);
    }
}
export const auth = (email,password, isSignIn) =>{
    return dispatch=>{
        const authData={
            email: email,
            password: password,
            returnSecureToken: true
        }
        dispatch(authStart())
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCc8QTTxRXyEacWeVlBtCzyVVKzTBIuSwM'
        if(!isSignIn){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCc8QTTxRXyEacWeVlBtCzyVVKzTBIuSwM'
        }
        axios.post(url,authData)
            .then(response=>{
                console.log(response.data);
                let expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000)
                localStorage.setItem('token', response.data.idToken)
                localStorage.setItem('expirationTime', expirationTime)
                localStorage.setItem('userId', response.data.localId)
                dispatch(authSuccess(response.data.idToken,response.data.localId))
                dispatch(checkAuthTimeOut(response.data.expiresIn))
            })
            .catch(err=>{
                dispatch(authFail(err.response.data.error))
            })
    }
}
export const setAuthRedirect = (path) =>{
    return{
        type: actionTypes.SET_AUTH_REDIRECT,
        path: path
    }
}
export const checkAuthState = ()=>{
    return dispatch=>{
        const token = localStorage.getItem('token')
        if(!token){
            dispatch(authLogout())
        }
        else{
            const expirationTime = localStorage.getItem('expirationTime')
            const userId = localStorage.getItem('userId')
            if(new Date(expirationTime) >= new Date()){
                dispatch(authSuccess(token,userId))
                dispatch(checkAuthTimeOut((new Date(expirationTime).getTime() - new Date().getTime())/1000))
            }
            else{
                dispatch(authLogout())
            }
        }
    }
}