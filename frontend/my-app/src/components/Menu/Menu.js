import React, { Component } from "react"
import { Link } from 'react-router-dom'

class Menu extends Component {
  render() {
    const { article } = this.props;
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    );
  }
}
export default Menu;
