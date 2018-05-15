import React from 'react';

class BoardItemForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title: ""
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleUpdate(field){
    return (e)=>{
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleFormSubmit(e){
    e.preventDefault();
    this.props.handleSubmit(this.state.title,this.props.type,e);
    this.setState({
      title: ""
    });
  }

  render(){
    return(
      <form className="form-type" onSubmit={(e)=>this.handleFormSubmit(e)}>
        <input type="text"
          onChange={this.handleUpdate("title")}
          value={this.state.title}
          placeholder="Add New Task Here"/>
      </form>
    );
  }
}

export default BoardItemForm;
