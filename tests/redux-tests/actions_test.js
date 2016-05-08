import expect from 'expect';
import * as actions from '../../src/actions';
import * as types from '../../src/actions/action_types';

/* TEST Redux actions for the app */
describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      id: 0,
      type: types.ADD_TODO,
      text
    }
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });
});
