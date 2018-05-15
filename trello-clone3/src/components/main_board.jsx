import React from 'react';
import ProgressBoard from './progress_board';

class MainBoard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: {},
      id: 0
    };
  }

  render(){
    const types = {
      0: "Start",
      1: "In Progress",
      2: "Done",
      3: "Follow Up"
    };
    return(
      <div id="main-board">
        <ProgressBoard type={types[0]}/>
        <ProgressBoard type={types[1]}/>
        <ProgressBoard type={types[2]}/>
        <ProgressBoard type={types[3]}/>
      </div>
    );
  }
}

export default MainBoard;
