import React,{Component} from 'react';
import './Searchjob.css';
class  Search extends React.Component{ 
  state={
    ville:"",
    categorie:""
  }
  getCategorie=(e)=>{
    e.preventDefault();
    this.setState({
        categorie:e.target.value
    })
  }
  getville=(e)=>{
    e.preventDefault();
    this.setState({
        ville:e.target.value
    })
  }
  SearchJobs=(e)=>{
    e.preventDefault();
    this.props.getJobs(this.state.ville,this.state.categorie);
  }
    render(){
    return(
     <div className="Search App mb-4">
       <h1 className="text-center">Find Your Jobs</h1>
      <form onSubmit={this.SearchJobs}>
       <div class="row">
           <div class="col-md-5">
             <select class="form-control" name="categorie" onChange={this.getCategorie}>
                <option>programming</option>
                <option>Design</option>
             </select>
           </div>
           <div class="col-md-5">
             <select class="form-control" name="ville" onChange={this.getville}>
               <option>ville</option>
                <option>New York</option>
                <option>Mexico</option>
                <option>atlanta</option>
                <option>Las vegas</option>
             </select>
             </div>
            <div class="col-md-2">
            <button className="btn btn-lg form-control"><i className="fa fa-search"></i> Search</button>
            </div>
         </div>
       </form>
      </div>
      )
   }
}
  export default Search;