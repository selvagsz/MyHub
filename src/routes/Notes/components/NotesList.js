import React from 'react';

class NotesList extends React.Component {
  render() {
    return (
      <div>
        <h1>Notes</h1>
        <form>
          <input type="text" placeholder="Write it down..." />
        </form>
        <div className="notes">
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

export default NotesList;
