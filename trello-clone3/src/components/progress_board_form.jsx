import React from 'react';
import {connect} from 'react-redux';
import { receiveTodo } from '../actions/todo_actions';

const mapStateToProps = state =>({
  todo: state.todos
});

const mapDispatchToProps = dispatch =>({
  receiveTodo: (todo)=>dispatch(receiveTodo(todo))
});

class ProgressBoardForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title: "",
      type: `${this.props.type}`
    };
    this.handleUpdate=this.handleUpdate.bind(this);
    // this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleUpdate(field){
    return (e) =>{
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const todo = {
      title: this.state.title,
      type: this.state.type,
      id: Date.now()
    };
    this.props.receiveTodo(todo);
    this.setState({title: ""});
  }

  render(){
    return(
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <input type="text"
               value={this.state.title}
               placeholder="Add New Task Here"
               onChange={this.handleUpdate("title")}
               onSubmit={(e)=>this.handleSubmit(e)}/>
      </form>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProgressBoardForm);
