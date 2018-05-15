import React from 'react';
import BoardItemFormContainer from './board_item_form_container';
import BoardListItem from './board_list_item';

class BoardItem extends React.Component{
  render(){
    let BoardListItems = [];
    if (this.props.todos) {
      const todos = Object.values(this.props.todos);
      todos.forEach(todo=>{
        if (todo.type === this.props.type) {
          BoardListItems.push(
            <BoardListItem key={todo.id} todo={todo} />
          );
        }
      });
    }
    return(
      <div id="board-item">
        <h1>{this.props.type}</h1>
        {BoardListItems}
        <BoardItemFormContainer type={this.props.type}/>
      </div>
    );
  }
}

export default BoardItem;
