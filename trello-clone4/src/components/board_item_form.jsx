import React from 'react';

class BoardItemForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      type: this.props.type
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(field){
    return (e)=>{
      this.setState({
        [field] : e.target.value
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
    this.setState({
      title: ""
    });
  }

  render(){
    return(
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <input type="text"
               value={this.state.title}
               onChange={this.handleUpdate("title")}
               placeholder="Enter New Todo Here"/>
      </form>
    );
  }
}

export default BoardItemForm;
