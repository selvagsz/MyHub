import React from 'react';
import classes from './HelloWorld.scss';

console.log(classes);
export default class HelloWorld extends React.Component {
  render() {
    return (
      <h1 className={classes.header}>Helloo React</h1>
    );
  }
}
