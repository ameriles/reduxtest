import { createStore, compose, applyMiddleware } from 'redux';
import postsReducer from '../modules/posts/reducer'


const logger = store => next => action => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
}

let enhancer;
if (process.env.NODE_ENV === 'development') {
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  enhancer = composeEnhancers(applyMiddleware(logger));
} else {
  enhancer = compose(applyMiddleware(logger));
}

const data = [{
    id: 1,
    title: 'Un Post Simple',
    content: 'Un post simple bien cortito'
  }, {
    id: 2,
    title: 'Un Post Mas Largo',
    content: 'Un post simple pero un poco mas largo. No tanto, pero mas largo'
  }, {
    id: 3,
    title: 'El ultimo post',
    content: 'No hay mas posts después de este'
  }]

const initialState = {
    posts: data,
    selectedPost: null
}

export default createStore(postsReducer, initialState, enhancer);