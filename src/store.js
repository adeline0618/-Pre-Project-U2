import { createStore } from 'redux';
import numberReducer from './reducers';

const store = createStore(numberReducer);

export default store;
