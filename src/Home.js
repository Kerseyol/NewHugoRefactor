import React from 'react';
import './App.css';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return(
            <div className="home">
                <h1>{this.props.tagline}</h1>
            </div>
        )
    }
}


export default Home;