/* Todo reducer */
import { VisibilityFilters } from '../../common/app_constants';
import { SET_VISIBILITY_FILTER, ADD_TODO, COMPLETE_TODO, TOGGLE_TODO } from '../../actions/action_types';
import initialState from '../../data/initial_state';

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state;
  }
}


function todos(state = initialState.todos, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case COMPLETE_TODO:
      return state.map((todo, index) => {
        if( index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo;
      })
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));
      default:
        return state;
  }
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return action.filter;
    default:
        return state;
  }
}

/* complete todo and add toto use another reducer this is called reducer composition
  - patter to build redux applications */
export default {
  visibilityFilter,
  todos
}
