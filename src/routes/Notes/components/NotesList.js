import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

class NotesList extends React.Component {
  render() {
    return (
      <div>
        <h1>Notes</h1>
        <form>
          <TextareaAutosize className="auto-expand"
            minRows={3}
            maxRows={6}
            defaultValue="Write it down..."
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
