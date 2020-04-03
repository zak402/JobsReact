import React,{Component} from 'react';
import {Route, Link } from "react-router-dom";

class  Job extends React.Component{ 
    render(){
      return(
         <Route>
                   <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                       <div className="card-company">
                           <img src={this.props.img} width="40%" className="mb-3"/>
                           <h3 class="card-title"><Link to={"/jobs/"+this.props.title}>{this.props.title}</Link></h3>
                           <h4 class="price">{this.props.price}</h4>
                           <h4 class="ville"><i className="fa fa-map-marker"></i> {this.props.ville}</h4>
                        </div>
                    </div>
         </Route>
      )
   }
}
  export default Job;