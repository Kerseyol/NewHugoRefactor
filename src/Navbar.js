import React from 'react';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import App from './App';
import './App.css';
import Home from './Home';
import About from './About';
import Booklist from './Booklist';
import NotFound from './NotFound';


class Navbar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    userId = this.props.userId

    render() {
    console.log(this.userId)
   return(  
    <div>
    
    <nav>
        <ul>
            <li>
                <Link to={`/user/${this.userId}/home`}>Home</Link>
            </li>
            <li>
                <Link to={`/user/${this.userId}/about`}>About</Link>
            </li>
            <li>
                <Link to={`/user/${this.userId}/booklist`}>Book List</Link>
            </li>
            <li>
                <Link to={`/user/${this.userId}/wishlist`}>Wish List</Link>
            </li>
            <li>
                <Link to={`/logout/`}>Logout</Link>
            </li>
        </ul>
    </nav>
    </div>
    
    )
}
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