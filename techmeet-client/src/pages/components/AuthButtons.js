import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

const AuthButtons = () => {
    const { userContext, setUserContext } = useContext(UserContext);
    if (userContext.token) {
        return (
            <button className="button" onClick={() => setUserContext({
                token: null,
                user: null
            })}>
              Logout
            </button>
        );
    } else {
        return (
            <>
            <Link to="/signup" className="button is-info">
              <strong>Sign up</strong>
            </Link>
            <Link to="/login" className="button is-info is-outlined">
                Log in
            </Link>
            </>
        );
    }   
}

export default AuthButtons
