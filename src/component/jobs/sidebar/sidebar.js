import React,{Component} from 'react';
import './sidebar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class  Sidebar extends React.Component{ 
    render(){
      return(
        <div className="col-lg-3">
        <div className="sidebar-jobs">
        {this.props.Jobs.map(data=>(
          <div className="sidebar-jobs-content">
            <img src={data.img}/>
            <div>
               <Link to={data.title} onClick={this.props.update}><h4 className="title">{data.title}</h4></Link>
               <h4 className="ville">{data.ville}</h4>
            </div>
            <h4 className="price">{data.price}</h4>
          </div>
         ))}
        </div>
      </div>
      )
   }
}
  export default  Sidebar;

  