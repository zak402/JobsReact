import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './user.css';
class  User extends React.Component{ 
    render(){
      return(
         <Route>
                   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                       <div className="card-user">
                           <img src={this.props.img} width="40%"/>
                           <h4 class="name"><Link to={"/user/"+this.props.name}>{this.props.name}</Link></h4>
                           <h4 class="categorie">{this.props.categorie}</h4>
                           <h4 class="ville"><i className="fa fa-map-marker"></i> {this.props.ville}</h4>
                        </div>
                  </div>
         </Route>
      )
   }
}
  export default User;