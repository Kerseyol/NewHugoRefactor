import React from 'react';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import App from './App';
import './App.css';
import Home from './Home';


class Userlist extends React.Component{
    render() {
        return(
            <div className="userlist">
                <h1>This will be the individualized booklist</h1>    
            </div>
   )
}
}

export default Userlist;