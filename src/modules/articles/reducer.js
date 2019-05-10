import { ADD_ARTICLE } from './actionTypes'

const initialState = {
    articles: []
};

function reducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return {
          ...state,
          articles: state.articles.concat(action.payload)
        }
      }

      return state;
};

export default reducer;
