import {GET_USER_FRIEND_LIST,UPDATE_USER_FRIEND_LIST} from './friend.type'

const initialState ={}

const friendReducer =(state = initialState,action) =>{
    switch (action.type) {
        case GET_USER_FRIEND_LIST:
            return {
                ...state,
                ...action.payload,
            }
        case UPDATE_USER_FRIEND_LIST:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return{
                ...state,
            }
    }
}

export default friendReducer