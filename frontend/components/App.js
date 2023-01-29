import React from 'react';
import { ReactDOM } from 'react';

const todos = [
  {
    name: 'Organize Garage',
    id: 1528817077286, // could look different, you could use a timestamp to generate it
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  };

  render() {
    return (
      <div>
        <div>
          <h1>Todo App</h1>
        </div>
        <button>Hide Completed</button>
      </div>
    )
  }
}
