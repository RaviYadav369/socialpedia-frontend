import { GET_USER_FRIEND_LIST, UPDATE_USER_FRIEND_LIST } from './friend.type'
import axios from 'axios'

export const getUserFriend = (_id) => async (dispatch) => {
    try {
        const userFriends = await axios({
            method: "GET",
            url: `http://localhost:3001/user/${_id}/friends`
        })
        return dispatch({ type: GET_USER_FRIEND_LIST, payload: userFriends })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const updateUserFriend = (_id,friend) => async(dispatch) =>{
    try {
        const updatedFriend = await axios({
            method:"PATCH",
            url:`http://localhost:3001/user/${_id}/${friend}`
        })
        return dispatch({type:UPDATE_USER_FRIEND_LIST,payload:updatedFriend.data})
        
    } catch (error) {
        return dispatch({type:"ERROR",payload:error})
    }
}