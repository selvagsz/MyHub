import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './NotesList.scss';

class NotesList extends React.Component {
  render() {
    return (
      <div>
        <h1>Notes</h1>
        <form>
          <TextareaAutosize className="auto-expand"
            minRows={5}
            placeholder="Write it down..."
          />
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
