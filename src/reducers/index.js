import { combineReducers } from 'redux';
import TodoAppReducer from './todo_reducer';

const appReducer = combineReducers(TodoAppReducer);

export default appReducer
