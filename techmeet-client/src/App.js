import React, {useState} from 'react';
import HomePage from "./pages/HomePage";
import NavBar from "./pages/components/NavBar"
import AddEvent from "./pages/Event/AddEvent";
import ViewEvent from "./pages/Event/ViewEvent";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Login from "./pages/User/Login.js"
import Signup from "./pages/User/Signup.js"
import UserContext from "./context/UserContext";
import ViewEvents from './pages/Event/ViewEvents';

const App = () => {
  const [userContext, setUserContext] = useState({
    token: null,
    user: null
  });

    return(

      <div>

    <Router>
      <UserContext.Provider value={{ userContext, setUserContext }}>
      <NavBar />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/new" component={AddEvent} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/event" component={ViewEvent}/>
            <Route exact path="/events" component={ViewEvents}/>
            <Route exact path="/signup" component={Signup}/>
        </Switch>
      </UserContext.Provider>
     </Router>
      </div>
    )
}

export default App;
