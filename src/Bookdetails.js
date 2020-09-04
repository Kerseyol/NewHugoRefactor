import React, { Component } from 'react';
import firebase from './Firebase';
import App from './App';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BookDetails extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {

        // const userId = this.props.match.params.userId;
    
        // const dbRef = firebase.database().ref();
        // dbRef.on('value', (response) => {
    
        //   const newState = [];
    
        //   const data = response.val();
    
        //   for (let key in data) {
    
            // newState.push(data[key]);
        //   }
          
        //   this.setState({
            //   booklist: newState
    
        //   }) 
        // })
    //   };

render() {
    console.log(this)
        return (
            <div>
            <Link to={`/user/:userId/booklist/`}>
            <button className="back-button">Back</button>
            </Link>
                <div>
                    <div className="largeCover">
                        <div className="description">
                            <h1>Hello</h1>
                            
                        </div>

                        <div className="image">
                        </div>
                    </div>
                </div>
              
            </div>
        )
    }



};

// <h1>{book[0]}</h1>
// <h2>by {book[1]}</h2>

export default BookDetails;