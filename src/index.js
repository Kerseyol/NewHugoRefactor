import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import { Match, Miss } from 'react-router';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './Login';
import NotFound from './NotFound';
import About from './About';
import Booklist from './Booklist';
import Home from './Home';
import {userContext} from './userContext';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: {}
    }
    console.log(this)
  }

  render() {
    return (
      <Router>
<div>
  <Switch>
  <Route exact path="/" component={Login} />
  <Route path="/user/:userId" component={App} />
  <Route path="/user/:userId/home" component={Home} />
  <Route path="/user/:userId/about" component={About} />
  <Route path="/user/:userId/booklist" component={Booklist} />
  <Route component={NotFound} />
  </Switch>
  
</div>
</Router>
          )
        }
      }
      
      // <Route path="/user/:userId" component={App} />
      
      
ReactDOM.render(
  <React.StrictMode>
    <Router><Root /></Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

