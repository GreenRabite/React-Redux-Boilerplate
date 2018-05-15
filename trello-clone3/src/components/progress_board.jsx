import React from 'react';
import ProgressBoardForm from './progress_board_form';
import ProgressBoardItem from './progress_board_item';
import { connect } from 'react-redux';
import { receiveTodos } from '../actions/todo_actions';

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>({
  receiveTodos: ()=>dispatch(receiveTodos())
});

class ProgressBoard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let ProgressBoardItems = [];
    if (this.props.todos) {
      const todos = Object.values(this.props.todos);
      todos.forEach(todo=>{
        if (todo.type === this.props.type) {
          ProgressBoardItems.push(
            <ProgressBoardItem todo={todo} key={todo.id} />
          );
        }
      });
    }
    return(
      <div id="progress-board">
        <h1>{this.props.type}</h1>
        {ProgressBoardItems}
        <ProgressBoardForm type={this.props.type}/>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProgressBoard);
