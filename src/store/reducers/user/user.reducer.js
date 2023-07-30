import {GET_USER, SELF,CLEAR_USER} from './user.type'

const initialState ={
}
export const userReducer = (state = initialState,action)=>{
    switch (action.type) {
        case SELF:
            return{
                ...state,
                ...action.payload,
            }
        case GET_USER:
            return{
                ...state,
                ...action.payload,
            }
        case CLEAR_USER:
            return{}
        default:
            return {
                ...state,
            }
    }
}

export default userReducer