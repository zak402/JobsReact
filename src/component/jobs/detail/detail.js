import React,{Component} from 'react';
import './detail.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from '../sidebar/sidebar';

class  Detail extends React.Component{ 
      state={
         Jobsdetail:[],
         Jobs:[],
         params:""
      }
      update=()=>{
        axios.get("/js/jobs.json").then(res=>
          {
            this.setState({
              Jobsdetail:res.data.filter(data=>data.title===this.props.match.params.title),
              Jobs:res.data
          })
        })
    }

      componentDidMount()
      {
          this.getJobs();
      }
      getJobs=()=>{
        axios.get("/js/jobs.json").then(res=>
          {
            this.setState({
              Jobsdetail:res.data.filter(data=>data.title===this.props.match.params.title),
              Jobs:res.data
          })

        })

      }  

    render(){
      return(
        
        <div className="job-detail">
          <div class="row">
            <div className="col-lg-9">
            {this.state.Jobsdetail.map(data=>(
               <div className="detail-content">
                 <div className="row">
                   <div className="col-md-8">
                     <img src={data.img} className="pull-left"/>
                     <div className="detail-title">
                       <h3 className="title">{data.title}</h3>
                       <h4 className="price">{data.price}</h4>
                       <h5 className="ville"> {data.ville}</h5> 
                     </div>
                   </div>
                   <div className="col-md-4 postule">
                     <button className="btn btn-default">book now</button>
                   </div>
                 </div>
                  <p>{data.content}</p>
                {data.skills.map(data=>(
                  <div className="skills">
                    <span>{data}</span>
                  </div>
                ))}
                <button className="btn btn-default postule_mobile">book now</button>
               </div>
             ))}
            </div>
            <Sidebar Jobs={this.state.Jobs} update={this.update}/>
          </div>
        </div>
      )
   }
}
  export default Detail;

  