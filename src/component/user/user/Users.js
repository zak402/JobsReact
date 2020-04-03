import React,{Component} from 'react';
import Search from '../searchuser/SearchUser';
import User from './user';
import axios from 'axios';

class  Users extends React.Component{ 
  state={
    User:[]
  }
  componentDidMount()
  {
      this.getUser();
  }
  getUser=()=>{
    axios.get("/js/user.json").then(res=>
    {
        this.setState({
          User:res.data
        })
    })
  }  
  searchUser=(ville,categorie)=>{
    axios.get("/js/user.json").then(res=>
      {
          res.data.map(data=>{
              this.setState({
                User:res.data.filter(data=>data.ville===ville&&data.categorie==categorie)
              })

          })
      })
  }
    render(){
      return(
        <div className="App">
              <Search getUser={this.searchUser}/>
            <div className="container">
                  <h4 className="mb-4 total-user">total user : {this.state.User.length}</h4>
                  <div className="row">
                    {this.state.User.map(data=>(
                      <User img={data.img} name={data.name} sous_title={data.sous_title} date={data.date} categorie={data.categorie} skills={data.skills} price={data.price} ville={data.ville}/>
                     ))}
                  </div>
            </div>  
        </div>
      )
   }
}
  export default Users;