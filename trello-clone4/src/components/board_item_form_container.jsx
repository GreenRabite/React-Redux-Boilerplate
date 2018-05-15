import { connect } from 'react-redux';
import { receiveTodo } from '../actions/todo_actions';
import BoardItemForm from './board_item_form';

const mapDispatchToProps = dispatch =>({
  receiveTodo: (todo)=> dispatch(receiveTodo(todo))
});

export default connect(null,mapDispatchToProps)(BoardItemForm);
