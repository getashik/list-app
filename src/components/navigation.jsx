import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../App';
import FireBase from "../components/firebase/fireBase";


export default function Navigation() {
    return (
      <Router>
        <div>
          <ul className="Menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/firebase">Fire Base</Link>
            </li>
            
          </ul>
  
          <hr />
  
          <Route exact path="/" component={App} />
         <Route path="/firebase" component={FireBase} />
          
        </div>
      </Router>
    );
  }