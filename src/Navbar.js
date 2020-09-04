import React from 'react';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import App from './App';
import './App.css';
import Home from './Home';
import About from './About';
import Booklist from './Booklist';
import NotFound from './NotFound';


const Navbar = () => {
    
   return(  
    
    <nav>
        <ul>
            <li>
                <Link to="/user/:userId/home">Home</Link>
            </li>
            <li>
                <Link to="/user/:userId/about">About</Link>
            </li>
            <li>
                <Link to="/user/:userId/booklist">Book List</Link>
            </li>
            <li>
                <Link to="/user/:userId/wishlist">Wish List</Link>
            </li>
            <li>
                <Link to="/">Logout</Link>
            </li>
        </ul>
    </nav>
    
    
    )
}
 
// <Router>
// <div>
// <Switch>
// <Route path="/user/:userId" component={App} />
// <Route path="/user/:userId/about" component={About} />
// <Route path="/user/:userId/userlist" component={Booklist} />
// <Route component={NotFound} />
// </Switch>

export default Navbar;