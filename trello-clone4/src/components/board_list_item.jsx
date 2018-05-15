import React from 'react';
import { connect } from 'react-redux';
import { receiveTodo, removeTodo } from '../actions/todo_actions';

const mapDispatchToProps = (dispatch) =>({
  receiveTodo: (todo)=>dispatch(receiveTodo(todo)),
  removeTodo: (todoId)=>dispatch(removeTodo(todoId))
});

class BoardListItem extends React.Component{
  constructor(props){
    super(props);
    this.handleMove = this.handleMove.bind(this);
  }

  handleMove(val){
    return ()=>{
      const status = [
        "Start",
        "In Progress",
        "Done",
        "Follow Up"
      ];
      const todo = this.props.todo;
      const idx = status.indexOf(todo.type);
      if (this.props.todo.type !== "Start" && val === -1) {
        todo["type"] = status[idx +val];
        this.props.receiveTodo(todo);
      }else if (this.props.todo.type !== "Follow Up" && val === 1) {
        todo["type"] = status[idx + val];
        this.props.receiveTodo(todo);
      }
    };
  }

  render(){
    return(
      <div className="board-list-item">
        <div>{this.props.todo.title}</div>
        <div className="buttons">
          <button onClick={this.handleMove(-1)}>Move Left</button>
          <button onClick={()=>this.props.removeTodo(this.props.todo.id)}>Delete Todo</button>
          <button onClick={this.handleMove(1)}>Move Right</button>
        </div>
      </div>
    );
  }
}

export default connect(null,mapDispatchToProps)(BoardListItem);
