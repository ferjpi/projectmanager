import React, { Component } from 'react';
import TodosItem from './todosItem'

class Todos extends Component {

  render() {
    let todosItems
    if(this.props.todos) {
      todosItems = this.props.todos.map(todo => {
        return (
          <TodosItem key={todo.title} todo={todo} />
        )
      })
    }
    return (
      <div className="Todos">
        <h3>Todo List</h3>
        {todosItems}
      </div>
    );
  }
}

// Projects.propTypes = {
//   projects: React.PropTypes.array,
//   onDelete: React.PropTypes.func
// }

export default Todos;
