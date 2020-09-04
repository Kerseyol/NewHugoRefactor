import React from 'react';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import App from './App';
import './App.css';
import Home from './Home';


const NotFound = () => {
   return(
       <div className="error">
       <h1>Error, something went wrong!</h1>    
       </div>
   )
}

export default NotFound;