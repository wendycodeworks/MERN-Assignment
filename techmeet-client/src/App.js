import React, {Component} from 'react';
import HomePage from "./pages/HomePage";
import NavBar from "./pages/components/NavBar"
import AddEvent from "./pages/Event/AddEvent";
import ViewEvent from "./pages/Event/ViewEvent";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Login from "./pages/User/Login.js"
import Signup from "./pages/User/Signup.js"
import UserContext from "./pages/_utils/UserContext"

class App extends Component {
  render(){
    return(
      <div>
    <Router>
    
      <UserContext.Provider value="Hello I'm Context">
        <NavBar />
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/new" component={AddEvent} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/event" component={ViewEvent}/>
              <Route exact path="/signup" component={Signup}/>
          </Switch>
        </UserContext.Provider>
     </Router>
      </div>
    )
  }
}

export default App;