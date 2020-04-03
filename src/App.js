import React from 'react';
import './Bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from './component/nav/Nav';
import Footer from './component/footer/footer';

import Jobs from './component/jobs/job/Jobs';
import Detail from './component/jobs/detail/detail';

import Users from './component/user/user/Users';
import Detail_user from './component/user/detail/detail';
function App() {
  return (
    <Router>
     <Navbar/>
    <div className="App">
      <Route exact path="/" component={Jobs} />
      <Route exact path="/jobs" component={Jobs} />
      <Route exact path="/jobs/:title" component={Detail} />
      <Route exact path="/user" component={Users} />
      <Route exact path="/user/:name" component={Detail_user} />
    </div>
    </Router>
  );
}

export default App;
