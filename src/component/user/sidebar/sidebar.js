import React,{Component} from 'react';
import './sidebar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class  Sidebar extends React.Component{ 
    render(){
      return(
          <div className="col-lg-3">
              <div className="sidebar-user">
                {this.props.user.map(data=>(
                <div className="sidebar-user-content">
                  <img src={data.img}/>
                  <div>
                     <Link to={data.name} onClick={this.props.update}><h4 className="name">{data.name}</h4></Link>
                     <h4 className="categorie">{data.categorie}</h4>
                  </div>
                </div>
                ))}
              </div>
            </div>
      )
   }
}
  export default  Sidebar;

  