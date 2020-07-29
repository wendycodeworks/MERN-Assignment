import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import UserContext from "../../context/UserContext";

const CreateEventButton = () => {
    const { userContext } = useContext(UserContext);
    function warning(){
        alert("Please login to create a Techmeet!")
    }

    if (userContext.token) {
        return (
            <Link to="/new" className="button">
                Start a Techmeet
            </Link>
        );
    } else {
        return (
            <>
            <Link to="/login" className="button" onClick={warning}>Start a Techmeet</Link>
            </>
        );
    }   
}

export default CreateEventButton
