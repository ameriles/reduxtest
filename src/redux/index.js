import { createStore } from 'redux';
import reducer from '../modules/articles/reducer.js'

const store = createStore(reducer);

export default store;