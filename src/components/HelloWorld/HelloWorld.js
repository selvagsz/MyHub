import React from 'react';
import classes from './HelloWorld.scss';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <h1 className={classes.header}>Hello React</h1>
    );
  }
}
