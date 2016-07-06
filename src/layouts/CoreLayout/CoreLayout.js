import React from 'react';
import { Link } from 'react-router';
import './CoreLayout.scss';

export const CoreLayout = ({ children }) => (
  <div className="main-container">
    <h1>selvagsz Hub</h1>
    <ul>
      <li><Link to="/notes">Notes</Link></li>
      <li><Link to="/todos">Todos</Link></li>
    </ul>
    {children}
  </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout;
