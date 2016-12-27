import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="/logo.svg" className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}
