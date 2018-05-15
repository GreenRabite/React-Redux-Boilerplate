import React from 'react';
import BoardItem from './board_item';

class MainBoard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: {},
      id: 0,
      types: {
        0: "To Do",
        1: "Doing",
        2: "Done",
        3: "Follow Up"
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMove = this.handleMove.bind(this);
  }

  handleMove(item,num){
    // console.log(item,num);
    console.log(item.type ===this.state.types[0]);
    let typeVal;
    if(item.type === this.state.types[0]) {
      typeVal = 0;
    }else if (item.type === this.state.types[1]) {
      typeVal = 1;
    }else if (item.type === this.state.types[2]) {
      typeVal = 2;
    }else if (item.type === this.state.types[3]) {
      typeVal = 3;
    }
    console.log(num+typeVal);
    if (num + typeVal >= 0 && num + typeVal <4) {
      let tasks = Object.assign({},this.state.tasks);
      let {id,title} = item;
      tasks[id] = {
        id,
        title,
        type: this.state.types[num+typeVal]
      };
      this.setState({tasks});
    }
  }

  handleSubmit(title,type,e){
    e.preventDefault();
    let tasks = Object.assign({},this.state.tasks);
    let id = this.state.id;
    tasks[id] = {
      id,
      title,
      type
    };
    this.setState({
      tasks,
      id: id+=1,
      types: {
        0: "To Do",
        1: "Doing",
        2: "Done",
        3: "Follow Up"
      }
    });
  }

  render(){
    const types = this.state.types;
    return(
      <div id="main-board">
        <BoardItem type={types[0]} tasks={Object.values(this.state.tasks)} handleSubmit={this.handleSubmit} handleMove={this.handleMove}/>
        <BoardItem type={types[1]} tasks={Object.values(this.state.tasks)} handleSubmit={this.handleSubmit} handleMove={this.handleMove}/>
        <BoardItem type={types[2]} tasks={Object.values(this.state.tasks)} handleSubmit={this.handleSubmit} handleMove={this.handleMove}/>
        <BoardItem type={types[3]} tasks={Object.values(this.state.tasks)} handleSubmit={this.handleSubmit} handleMove={this.handleMove}/>
      </div>
    );
  }
}

export default MainBoard;
