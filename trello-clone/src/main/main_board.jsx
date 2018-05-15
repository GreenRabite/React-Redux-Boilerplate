import React from 'react';
import BoardItem from './board_item';
import './main_board.css';

class MainBoard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tasks : {},
      id: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  moveLeft(item){
    if (item.type !== "To Do") {
      let {id,title} = item;
      let tasks = Object.assign({},this.state.tasks);
      if (item.type === "Doing") {
        console.log(id,title);
        tasks[id] = {
          id,
          title,
          type: "To Do"
        };
      }else if (item.type === "Done") {
        tasks[id] = {
          id,
          title,
          type: "Doing"
        };
      }else if (item.type === "Follow Up") {
        tasks[id] = {
          id,
          title,
          type: "Done"
        };
      }
      this.setState({tasks});
    }
  }

  moveRight(item){
    if (item.type !== "Follow Up") {
      let {id,title} = item;
      let tasks = Object.assign({},this.state.tasks);
      if (item.type === "To Do") {
        console.log(id,title);
        tasks[id] = {
          id,
          title,
          type: "Doing"
        };
      }else if (item.type === "Doing") {
        tasks[id] = {
          id,
          title,
          type: "Done"
        };
      }else if (item.type === "Done") {
        tasks[id] = {
          id,
          title,
          type: "Follow Up"
        };
      }
      this.setState({tasks});
    }
  }

  handleSubmit(field,type,e){
    e.preventDefault();
    let tasks = Object.assign({},this.state.tasks);
    tasks[this.state.id] = ({
      id: this.state.id,
      title: field,
      type
    });
    this.setState({
      tasks,
      id: this.state.id+1
    });
    console.log(this.state);
  }

  render(){
    return(
      <div id="main-board">
        <BoardItem type="To Do" handleSubmit={this.handleSubmit} tasks={Object.values(this.state.tasks)} moveLeft={this.moveLeft} moveRight={this.moveRight}/>
        <BoardItem type="Doing" handleSubmit={this.handleSubmit} tasks={Object.values(this.state.tasks)} moveLeft={this.moveLeft} moveRight={this.moveRight}/>
        <BoardItem type="Done" handleSubmit={this.handleSubmit} tasks={Object.values(this.state.tasks)} moveLeft={this.moveLeft} moveRight={this.moveRight}/>
        <BoardItem type="Follow Up" handleSubmit={this.handleSubmit} tasks={Object.values(this.state.tasks)} moveLeft={this.moveLeft} moveRight={this.moveRight}/>
      </div>
    );
  }
}

export default MainBoard;
