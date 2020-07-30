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
import Footer from './pages/components/Footer';

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
                <Route exact path="/event/:id" component={props => <ViewEvent eventId={props.match.params.id} userContext={UserContext}/>}/>
                <Route exact path="/events" component={ViewEvents}/>
                <Route exact path="/signup" component={Signup}/>
            </Switch>
          </UserContext.Provider>
        <Footer />
     </Router>
      </div>
    )
}

export default App;
