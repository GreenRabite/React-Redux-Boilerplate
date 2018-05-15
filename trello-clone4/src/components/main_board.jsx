import React from 'react';
import BoardItemContainer from './board_item_container';

class MainBoard extends React.Component{
  render(){
    return(
      <div id="main-board">
        <BoardItemContainer type="Start"/>
        <BoardItemContainer type="In Progress"/>
        <BoardItemContainer type="Done"/>
        <BoardItemContainer type="Follow Up"/>
      </div>
    );
  }
}

export default MainBoard;
