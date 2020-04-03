import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Nav.css";
class Navbar extends React.Component{   
    render(){
      return(
<nav class="navbar navbar-expand-lg navbar-light">
  <Link to="/jobs" class="navbar-brand" > Find your <span>Jobs</span></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
      <Link to="/jobs" class="nav-link active"><i class="fa fa-briefcase" aria-hidden="true"></i> Jobs</Link>
      </li>
      <li class="nav-item">
      <Link to="/user" class="nav-link active"><i class="fa fa-user" aria-hidden="true"></i> user</Link>
      </li>
    </ul>
    
  </div>
</nav>
      )
   }
}
  export default Navbar;