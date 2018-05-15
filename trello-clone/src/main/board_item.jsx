import React from 'react';
import './board_item.css';
import BoardItemForm from './board_item_form';

class BoardItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      type: {
        type: ["To Do", "Doing", "Done", "Follow Up"]
      }
    };
  }



  render(){
    let tasks = this.props.tasks;
    let itemLists = [];
    tasks.forEach(task=>{
      console.log(task.type === this.props.type);
      if (task.type === this.props.type) {
        itemLists.push(task);
      }
    });
    console.log(itemLists);
    let listItems = itemLists.map(item=>{
      return(
        <div className="list-items" key={item.id}>
          <p>{item.title}</p>
          <div className="buttons">
            <button onClick={()=>this.props.moveLeft(item)}>Move Left</button>
            <button onClick={()=>this.props.moveRight(item)}>Move Right</button>
          </div>
        </div>
      );
    });
    return(
      <div className="board-items">
        <div>{this.props.type} Board</div>
        <div>
          {listItems}
        </div>
        <BoardItemForm handleSubmit={this.props.handleSubmit} type={this.props.type}/>
      </div>
    );
  }
}

export default BoardItem;
