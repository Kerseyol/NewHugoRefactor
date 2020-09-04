import React from 'react';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import App from './App';
import './App.css';
import Home from './Home';


class Wishlist extends React.Component{
    render() {
        return(
            <div className="wishlist">
                <h1>This will be the wishlist</h1>    
            </div>
   )
}
}

export default Wishlist;