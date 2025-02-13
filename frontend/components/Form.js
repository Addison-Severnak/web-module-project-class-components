import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  };

  handleChanges = e => {
    e.preventDefault();
    this.setState({ ...this.state, todo: e.target.value })
  };

  submitForm = e => {
    e.preventDefault();
    this.props.addToDo(e, this.state.todo);
    this.setState({ ...this.state, todo: '' })
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input type='text' name='todo' value={this.state.todo} onChange={this.handleChanges} />
        <button>Add</button>
      </form>
    )
  };
};
