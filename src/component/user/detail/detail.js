import React,{Component} from 'react';
import axios from 'axios';
import './detail.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from '../sidebar/sidebar';
class  Detail extends React.Component{ 
    state={
        UserDetail:[],
        User:[],
        params:""
      }
    
      componentDidMount()
      {
          this.getUser();
      }

      update=()=>{
        axios.get("/js/user.json").then(res=>
          {
            this.setState({
              UserDetail:res.data.filter(data=>data.name==this.props.match.params.name),
              User:res.data
          })
        })
    }
      getUser=()=>{
        axios.get("/js/user.json").then(res=>
        {
            this.setState({
              UserDetail:res.data.filter(data=>data.name==this.props.match.params.name),
              User:res.data
            })
        })
      }  
    render(){
      return(
        <div className="user-detail">
         <div className="row">
           <div className="col-lg-9">
          {this.state.UserDetail.map(data=>(
           <div className="detail-content">
             <div className="row">
               <div className="col-md-8">
                <img src={data.img} className="pull-left"/>
                <div className="detail-title">
                    <h3 className="name">{data.name}</h3>
                    <h4 className="categorie">{data.categorie}</h4>
               </div>
              </div>
             <div className="col-md-4 postule">
                  <button className="btn btn-default">Resume</button>
             </div>
            </div>
             <p> {data.content}</p>
             <ul className="list-unstyled">
               <li>telephone: <span>{data.telephone}</span></li>
               <li>Email: <span>{data.email}</span></li>
               <li>ville: <span>{data.ville}</span></li>
             </ul>
             {data.skills.map(data=>(
                  <div className="skills">
                    <span>{data}</span>
                  </div>
                ))}
                <button className="btn btn-default postule_mobile">book now</button>
            </div>
            ))}
          </div>
          <Sidebar user={this.state.User} update={this.update}/>
         </div>
        </div>
      )
   }
}
  export default Detail;

  