import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

const AuthButtons = () => {
    const { userContext } = useContext(UserContext);
    if (userContext.token) {
        return (
            <Link to="/logout" className="button">
              Logout
            </Link>
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
