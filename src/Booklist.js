import React from 'react';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import App from './App';
import './App.css';
import Home from './Home';
import firebase from './Firebase';


class Booklist extends React.Component{
    constructor(props, context) {
        super(props, context);
    }

    

    render() {
        const booklist = this.props.booklist;

        return(
            <div className="booklist-wrap wrapper">
            <h2 className="space-cadet">{this.props.tagline}</h2>
            <div className="booklist-buttons">
            <button><h3>View Completed</h3></button>    
            <button><h3>View Remaining</h3></button>
            </div> 
            <div className="booklist-div">
           
            {booklist.map((book) => {
            
            return(
                <div className="book-div">
                <div key={book[0]} className="bookCard">
                <ul>
                  <li>
                    <Link to={`/user/:userId/booklist/${book[0]}`} onClick={console.log("help")}>
                      <img src={book[2]} alt={`Book cover for ${book[0]} by ${book[1]}}`}></img>
                      <p className="booklist-title">{book[0]}</p>
                      <p>{book[1]}</p>
                      <p>{book.id}</p>
                      </Link>
                      <button className="haveRead">Click if Read</button>
                      <button className="wishlist-button">Add to Wishlist</button>
                  </li>
                </ul>
                </div>
                
            
                </div>
                )
            })}
            </div>
            </div>
            )
}
}

export default Booklist;

