import { SELF, GET_USER, CLEAR_USER } from "./user.type";
import axios from "axios";

export const getMySelf = () => async (dispatch) => {
    try {

        const User = await axios({
            method: "GET",
            url: "http://localhost:3001/user",
        })
        return dispatch({ type: SELF, payload: {...User.data.user._doc}  })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const getUser = (_id) => async (dispatch) => {
    try {
        const User = await axios({
            method: 'GET',
            url: `http://localhost:3001/user/${_id}`
        })
        return dispatch({ type: GET_USER, payload: User.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const clearUser = () => async (dispatch) => {
    try {
        return dispatch({ type: CLEAR_USER, payload: {} })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}