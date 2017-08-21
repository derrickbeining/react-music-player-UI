import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      greeting: 'Hi there, partner!'
    }
  }

  render () {
    return (
      <div id="main" className="container-fluid">
        <h1>{this.state.greeting}</h1>
      </div>
    )
  }
}
