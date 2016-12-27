import React from 'react'
import { Link } from 'react-router'

export default class extends React.Component {
  render() {
    return (
      <p className="App-intro">
        This is our custom component
        <br/>
        <Link to="/">home</Link>
      </p>
    )
  }
}
