import { ADD_POST, SELECT_POST } from './actionTypes';

const postsReducer = (state, action) => {
    if (action.type === ADD_POST) {
        return {
            ...state,
            posts: state.posts.concat(action.post)
        }
    } else if (action.type === SELECT_POST) {
        return {
            ...state,
            selectedPost: action.post
        }
    }

    return state;
}

export default postsReducer;