import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './footer.css';
class  Footer extends React.Component{ 
    render(){
      return(
<footer class="page-footer font-small blue pt-4">
  <div class="footer-copyright text-center text-white py-3">© 2018 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/" className="text-white"> zakaria@zakariadev.com</a>
  </div>
</footer>
      )
   }
}
  export default Footer;