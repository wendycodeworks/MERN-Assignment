import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

const CreateEventButton = () => {
    const { userContext } = useContext(UserContext);
    if (userContext.token) {
        return (
            <Link to="/new" className="button">
              Start a Techmeet
            </Link>
        );
    } else {
        return (
            <>
            {alert("Please login to continue!")}
            <Link to="/login" className="button">
              Start a Techmeet
            </Link>
            </>
        );
    }   
}

export default CreateEventButton
