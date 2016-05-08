/* Redux actions */
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from './action_types';
import { VisibilityFilters } from '../common/app_constants';

/* action creators */
let nextTodoId = 0;

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const completeTodo = (index) => {
  return {
    type: COMPLETE_TODO,
    index
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}
