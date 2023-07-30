import { SIGN_IN, SIGN_UP, SIGN_OUT } from './auth.type'
import axios from 'axios';
export const signIn = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            url: "http://localhost:3001/auth/login",
            data: userData,
        });
        localStorage.setItem('socialUser', JSON.stringify({ token: User.data.token }))
        axios.defaults.headers.common["Authorization"] = `Bearer ${User.data.token}`
        return dispatch({ type: SIGN_IN, payload: User.data })

    } catch (err) {
        return dispatch({ type: "ERROR", payload: err })

    }
}

export const signUp = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: 'POST',
            url: "http://localhost:3001/auth/register",
            data: userData,
        })
        localStorage.setItem("socialUser", JSON.stringify({ token: User.data.token }))
        axios.defaults.headers.common['Authorization'] = `Bearer ${User.data.token}`
        return dispatch({ type: SIGN_UP, payload: User.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const signOut = () => async (dispatch) => {
    try {
        localStorage.removeItem('socialUser')
        return dispatch({ type: SIGN_OUT, payload: {} })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}