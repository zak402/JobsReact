import React,{Component} from 'react';
import Search from '../searchjob/Searchjob';
import Job from './job';
import axios from 'axios';
import './job.css';


class  Jobs extends React.Component{ 
  state={
    Jobs:[]
  }
  componentDidMount()
  {
      this.getJobs();
  }
  getJobs=()=>{
    axios.get("/js/jobs.json").then(res=>
      {
        this.setState({
          Jobs:res.data
        })
    })
  }  
  searchfrJobs=(ville,categorie)=>{
    axios.get("/js/jobs.json").then(res=>
      {
          res.data.map(data=>{
              this.setState({
                Jobs:res.data.filter(data=>data.ville===ville&&data.categorie==categorie)
              })

          })
      })
  }


    render(){
      return(
        <div className="App">
              <Search getJobs={this.searchfrJobs}/>
            <div className="container mt-4 main-Jobs">
                    <h4 className="mb-4 total-jobs">total jobs : {this.state.Jobs.length}</h4>
                    <div className="row">
                    {this.state.Jobs.map(data=>(
                      <Job img={data.img} title={data.title} sous_title={data.sous_title} date={data.date} categorie={data.categorie} skills={data.skills} price={data.price} ville={data.ville}/>
                    ))}
                    </div>
            </div>  
        </div>
      )
   }
}
  export default Jobs;