import React from 'react';
import HelloWorld from '../../components/HelloWorld';
import './CoreLayout.scss';

export const CoreLayout = ({ children }) => (
  <div className="main-container">
    <HelloWorld />
    {children}
  </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout;
