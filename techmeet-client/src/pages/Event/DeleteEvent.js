import React from 'react';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

const DeleteEvent = (props) => {
    const {userContext} = useContext(UserContext)
    const [deleted, setDeleted] = useState(false)

    function deleteEvent() {
        if (userContext.token) {
            axios.delete(`https://shrouded-refuge-96179.herokuapp.com/event/${props.eventId}`, {
                params: {
                    token: userContext.token
                }
            })
            .then(() => {
                alert("Event deleted :(")
                setDeleted(true)
              })
            } else {
              alert("Something went wrong, please try again!")
            }

        }

    return (
        <div>
             <button className="button is-danger is-medium" onClick={deleteEvent}> Delete </button>
                {deleted && <Redirect to="/events"/>}
        </div>
    )
}

export default DeleteEvent
