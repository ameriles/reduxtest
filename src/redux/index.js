import { createStore } from 'redux';
import reducer from '../modules/articles/reducer'

const store = createStore(reducer);

export default store;