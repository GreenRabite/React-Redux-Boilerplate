import merge from 'lodash/merge';
import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from '../actions/todo_actions';

const todoReducer = (state={}, action) =>{
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      return merge(newState,action.todos);
    case RECEIVE_TODO:
      newState = merge({},state);
      newState[action.todo.id] = action.todo;
      return newState;
    case REMOVE_TODO:
      newState = merge({},state);
      delete newState[action.todoId];
      return newState;
    default:
      return state;
  }
};

export default todoReducer;
