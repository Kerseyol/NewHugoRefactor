import React from 'react';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Header from './Header';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Booklist from './Booklist';
import Userlist from './Userlist';
import Wishlist from './Wishlist';
import firebase from './Firebase';
import Bookdetails from './Bookdetails';
import Logout from './Logout';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.selectBook = this.selectBook.bind(this);

    this.state = {
      book: [],
      booklist: [],
      userlist: {},
      wishlist: {},
      userId: this.props.match.params.userId
    }
    console.log(this.props.match.params.userId)
  }
  // selectBook(book) {
  //   wishlist = selection(book);
  //   const selection = {...this.state.wishlist};
  //   this.setState({ wishlist });
  // }

  getBookDetails() {
    console.log("testing from")
  }

  // componentWillMount() {
  //   this.ref = firebase.syncState(`${this.props.match.params.userId}/booklist`), {
  //     context: this,
  //     state: 'booklist'
  //   }
  // }

  // componentWillUnmount() {
  //   firebase.removeBinding(this.ref);
  // }

  componentDidMount() {

    // const userId = this.props.match.params.userId;

    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {

      const newState = [];

      const data = response.val();

      for (let key in data) {

        newState.push(data[key]);
      }
      
      this.setState({
          booklist: newState

      }) 
    })
  };

  render() {
    
    return (
        <Router>
          <div className="mainPage">
            <Navbar 
            userId={this.props.match.params.userId}
            />
            <Header />
          </div>
          <Switch>
          <Route 
              path="/user/:userId/home" 
              component={() => <Home booklist={this.state.booklist}
              tagline={`Space Cadet ${this.props.match.params.userId}'s Hugo Adventure`}
              userId={this.props.match.params.userId} 
              />}
              />
          <Route path="/user/:userId/about" component={About} userId={this.props.match.params.userId} />
          <Route path="/user/:userId/wishlist" component={Wishlist} userId={this.props.match.params.userId} />
          <Route path="/user/:userId/booklist/:bookId" component={Bookdetails} userId={this.props.match.params.userId} />
          <Route
              path='/user/:userId/booklist'
              component={() => <Booklist booklist={this.state.booklist}
              tagline={`Space Cadet ${this.props.match.params.userId}'s Book List`}
              userId={this.props.match.params.userId}
              />}
            />
            <Route path="/logout" component={Logout} userId={this.props.match.params.userId} />
            </Switch>
          </Router>
          );
        }
      }
                  // <Route exact path="/user/:userId/booklist" component={Bookdetails} render={(props) => (
                  //   <Booklist {...props} booklist={this.state.booklist} />
                  // )} /> 
      
export default App;
