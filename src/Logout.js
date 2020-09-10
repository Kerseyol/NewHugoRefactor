import React from 'react';

class Logout extends React.Component {

 
    userLogout() {
        console.log("hello matey")
        alert("nope, no logout")
    }

    render() {
        
        return (
            <div className="logout">
            <h1>Sure you want to log out?</h1>
            <button onClick={this.userLogout}>Yup</button>
            </div>
            )
    }
}

export default Logout;