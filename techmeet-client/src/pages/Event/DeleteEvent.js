import React from 'react';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import { useContext } from 'react';

const DeleteEvent = (props) => {
    const {userContext} = useContext(UserContext)

    function deleteEvent() {
        if (userContext.token) {
            axios.delete(`https://shrouded-refuge-96179.herokuapp.com/event/${props.eventId}`, {
                params: {
                    token: userContext.token
                }
            })
            .then(() => {
                alert("Event deleted :(")
              })
            } else {
              alert("Something went wrong, please try again!")
            }

        }

    return (
    <button className="button is-danger is-medium" onClick={deleteEvent}> Delete </button>
    )
}

export default DeleteEvent
