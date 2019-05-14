import { createStore } from 'redux';
import reducer from '../modules/posts/reducer'

const store = createStore(reducer);

export default store;