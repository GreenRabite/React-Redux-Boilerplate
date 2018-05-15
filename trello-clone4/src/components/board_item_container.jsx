import { connect } from 'react-redux';
import { receiveTodos ,receiveTodo, removeTodo } from '../actions/todo_actions';
import BoardItem from './board_item';

const mapStateToProps = (state)=>({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo)=>dispatch(receiveTodo(todo)),
  removeTodo: (todoId)=>dispatch(removeTodo(todoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardItem);
