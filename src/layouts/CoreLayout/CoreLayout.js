import React from 'react';
import { Link } from 'react-router';
import './CoreLayout.scss';
import '../../styles/core.scss';
import NotesIcon from 'react-icons/fa/sticky-note-o';
import TodosIcon from 'react-icons/fa/list-ul';

export const CoreLayout = ({ children }) => (
  <div className="main-container">
    <nav>
      <ul className="nav">
        <li><Link to="/notes" activeClassName="active"><NotesIcon size={25} /></Link></li>
        <li><Link to="/todos" activeClassName="active"><TodosIcon size={25} /></Link></li>
      </ul>
    </nav>
    <div className="container">
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout;
