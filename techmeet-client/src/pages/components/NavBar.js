import React, { Component } from 'react';
import 'bulma';
import { Link } from "react-router-dom"
import logo from "./assets/logo.png"
import SearchBar from "./SearchBar.js"
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import AuthButtons from "./AuthButtons";


const NavBar = () => {
    
    const { userContext, setUserContext } = useContext(UserContext);

    return(
            <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                            <img src={logo} styles={{width:100, height:100}}/>
                    </Link>
                    <div className="navbar-item" href="#">
                    <div className="is-size-4">
                        Tech(meet)
                    </div>
                  
                    <div className="navbar-item">
                        <SearchBar />
                    </div>
                </div>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                    <Link to="/new" className='navbar-item'><button className='button is-info is-outlined'>Start a TechMeet</button></Link>
                         <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                More
                                </a>

                                <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Jobs
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <br className="navbar-divider"/>
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-item">
                        <div className="buttons">
                           <AuthButtons />
                            <div>{userContext.firstName}</div>
                        </div>
                    </div>
            
                </div>
            </nav>
        </div>
    )
}

export default NavBar
