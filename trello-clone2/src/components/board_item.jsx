import React from 'react';
import BoardItemForm from './board_item_form';

class BoardItem extends React.Component{
  render(){
    const type = this.props.type;
    let tasks = this.props.tasks;
    let listItems = [];
    tasks.forEach(task=>{
      if (task.type === type) {
        listItems.push(task);
      }
    });
    let TaskItems = listItems.map(item=>{
      return(
        <div className="task-items" key={item.id}>
          <h4>{item.title}</h4>
          <div className="button-grp">
            <button onClick={()=>this.props.handleMove(item,-1)}>Move Left</button>
            <button onClick={()=>this.props.handleMove(item,1)}>Move Right</button>
          </div>
        </div>
      );
    });
    return(
      <div className="board-item">
        <h3>{type} Board</h3>
        {TaskItems}
        <BoardItemForm type={type} handleSubmit={this.props.handleSubmit}/>
      </div>
    );
  }
}

export default BoardItem;
