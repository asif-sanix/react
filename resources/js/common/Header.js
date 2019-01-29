import React, { Component } from 'react';
import  {NavLink} from 'react-router-dom'
export default class Header extends Component {
   constructor(props) {
        super(props);  
    }

    render() {
      //console.log(this.props.history.location.pathname)
      //console.log(this.props.history.location.pathname)
        return (

          <nav id="topheader" className="navbar navbar-expand-sm bg-dark navbar-dark">
           <NavLink className="navbar-brand"  exact={true} to="/">Logo</NavLink>
           <ul className="navbar-nav">
             <li className="nav-item">
              <NavLink className="nav-link"  exact={true} to="/">Home</NavLink>
             </li>
             <li className="nav-item">
              <NavLink className="nav-link" exact={true} to="/about">About</NavLink>
             </li>
             <li className="nav-item">
              <NavLink className="nav-link" exact={true} to="/contact">Contact</NavLink>
             </li>

             <li className="nav-item">
              <NavLink className="nav-link" exact={true} to="/register">Register</NavLink>
             </li>
             
           </ul>
        </nav>
        );
    }
}


