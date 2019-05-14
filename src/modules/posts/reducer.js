import { ADD_POST, SELECT_POST } from './actionTypes'

const initialState = {
    posts: [],
    selectedPost: null
};

function reducer(state = initialState, action) {
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
};

export default reducer;
