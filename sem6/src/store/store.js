import { createStore } from 'redux';
import tasksReducer from '../reducers/reducer';

const store = createStore(tasksReducer);

export default store;