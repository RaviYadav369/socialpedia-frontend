import {GET_POST,DELETE_POST,CREATE_POST,UPDATE_POST,GET_USER_POST} from './post.type'

const initialState ={

}

export const postReducer = (state = initialState,action)=>{
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                ...action.payload,
            }
        case CREATE_POST:
            return{
                ...state,
                ...action.payload,
            }
        case UPDATE_POST:
            return{
                ...state,
                ...action.payload,
            }
        case GET_USER_POST:
            return {
                ...state,
                ...action.payload,
            }
        case DELETE_POST:
            return{}
        default:
            return{
                ...state,
            }
    }
}

export default postReducer