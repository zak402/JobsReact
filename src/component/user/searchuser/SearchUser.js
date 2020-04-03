import React,{Component} from 'react';
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
    this.props.getUser(this.state.ville,this.state.categorie);
  }
    render(){
    return(
     <div className="Search App mb-4">
       <h1 className="text-center mt-4 mb-4">Search live Users</h1>
      <form onSubmit={this.SearchJobs}>
       <div class="row">
           <div class="col-md-5">
             <select class="form-control" name="categorie" onChange={this.getCategorie}>
             <option>categorie</option>
                <option>front end developer</option>
                <option>developer</option>
                <option>Design</option>
             </select>
           </div>
           <div class="col-md-5">
             <select class="form-control" name="ville" onChange={this.getville}>
             <option>ville</option>
                <option>canada</option>
                <option>New york</option>
                <option>Los Angles</option>
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