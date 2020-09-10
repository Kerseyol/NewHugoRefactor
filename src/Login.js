import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import {Route, BrowserRouter as Router, Switch, Link, Redirect, useHistory} from 'react-router-dom';
import index from './index';
import './App.css';
import App from './App';
import NotFound from './NotFound';

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userId: {}
        }
    }

    goToUser(event) {
        event.preventDefault();
        const userId = this.userInput.value;
        console.log(`Hello we now go to ${userId}`);
        this.setState({
            userId: userId
        })
        this.props.history.push(`/user/${userId}/home`)
    }

    render() {
        return (
            
            <div className="login-menu">
                <form className="login-form" onSubmit={this.goToUser.bind(this)}>
                <h1>Login</h1>
                <input type="text" required placeholder="Gimme Deets" defaultValue={""}
                    ref={(input) => {this.userInput = input}} />
                    <button type="submit">Press Me</button>
                </form>
            </div>
        )
    }
}


export default Login;
