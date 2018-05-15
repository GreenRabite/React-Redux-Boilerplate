import React from 'react';
import {connect} from 'react-redux';
import { receiveTodo, removeTodo } from '../actions/todo_actions';

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>({
  receiveTodo: (todo)=>dispatch(receiveTodo(todo)),
  removeTodo: (todoId)=>dispatch(removeTodo(todoId))
});

class ProgressBoardItem extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    console.log(e);
    this.props.removeTodo(this.props.todo.id);
  }

  handleSubmit(diff,e){
    const types = [
      "Start",
      "In Progress",
      "Done",
      "Follow Up"
    ];
    if (diff === -1 && this.props.todo.type !== "Start") {
      const todo = this.props.todo;
      todo["type"]= types[types.indexOf(this.props.todo.type) -1];
      this.props.receiveTodo(todo);
    }else if (diff === 1 && this.props.todo.type !== "Follow Up") {
      const todo = this.props.todo;
      todo["type"]= types[types.indexOf(this.props.todo.type) +1];
      this.props.receiveTodo(todo);
    }
  }

  render(){
    return(
      <div id="todo-item">
        <h4>{this.props.todo.title}</h4>
        <div className="btn-move">
          <button onClick={(e)=>this.handleSubmit(-1,e)}>Move Left</button>
          <button onClick={this.handleDelete}>Delete </button>
          <button onClick={(e)=>this.handleSubmit(1,e)}>Move Right</button>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(ProgressBoardItem);
