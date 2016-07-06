import React from 'react';

class TodosList extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <form>
          <input type="text" placeholder="What needs to be done..." />
        </form>
        <div className="todos">
          <ul>
            <li>Foo</li>
            <li>Bar</li>
            <li>Baz</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TodosList;
