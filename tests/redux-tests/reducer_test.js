import expect from 'expect'
import todoReducer from '../../src/reducers/todo_reducer';
import * as types from '../../src/actions/action_types';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      todoReducer.todos(undefined, {})
    ).toEqual([
      {
        id: 233,
        text: 'Consider using Redux',
        completed: true
      },
      {
        id: 423,
        text: 'Keep all state in single tree',
        completed: false
      }
    ])
  });

  it('should handle ADD_TODO', () => {
    expect(
      todoReducer.todos([], {
        type: types.ADD_TODO,
        text: 'Run the tests',
        id: 0
      })
    ).toEqual(
      [
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }
      ]
    )

    expect(
      todoReducer.todos(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: types.ADD_TODO,
          text: 'Run the tests',
          id: 1
        }
      )
    ).toEqual(
      [
        {
          text: 'Use Redux',
          completed: false,
          id: 0
        },
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }
      ]
    )
  });
});
