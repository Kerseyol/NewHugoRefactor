import React from 'react';
import './App.css';
import victorhugo from './victorhugo.jpg';

class About extends React.Component {
    constructor(props, context) {
        super(props, context);
        // this.selectBook = this.selectBook.bind(this);
        const userId = this.props.match.params.userId
        
        
    }
    render() {
        return(
            <div className="about">
                <h1>Victor Hugo</h1>
                <img src={victorhugo}></img>
            </div>
        );
    };
};


export default About;