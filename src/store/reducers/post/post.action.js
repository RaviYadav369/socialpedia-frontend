import { GET_POST, DELETE_POST, CREATE_POST, UPDATE_POST,GET_USER_POST } from './post.type'
import axios from 'axios'

export const getPost = () => async (dispatch) => {
    try {
        const Posts = await axios({
            method: "GET",
            url: "http://localhost:3001/posts"
        })
        console.log(Posts);
        return dispatch({ type: GET_POST, payload: Posts  })

    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const getUserPost = (_id)=>async(dispatch)=>{
    try {
        const userPosts = await axios({
            method:"GET",
            url:`http://localhost:3001/posts/${_id}/posts`

        })
        return dispatch({type:GET_USER_POST,payload:userPosts})
    } catch (error) {
        return dispatch({type:GET_USER_POST,payload:error})
    }
}
