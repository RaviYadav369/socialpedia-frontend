import { combineReducers } from 'redux'
import auth from './auth/auth.reducer'
import user from './user/user.reducer'
import post from './post/post.reducer'

const rootReducer = combineReducers({
    auth,
    user,
    post,
})
export default rootReducer