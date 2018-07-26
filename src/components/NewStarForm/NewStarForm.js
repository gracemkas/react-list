import React, { Component } from 'react';


class NewStarForm extends Component {


  render() {

    return (
        <form onSubmit={this.props.handleClick}>
            <input placeholder="star name" value={this.props.newForm.name} type="text" onChange={this.props.handleChangeForInput('name')}/>
            <input placeholder="diameter"value={this.props.newForm.diameter} type="number" onChange={this.props.handleChangeForInput('diameter')}/>
            <input type="submit" value="Click me"/>
          </form>
    );
  }
}

export default NewStarForm;