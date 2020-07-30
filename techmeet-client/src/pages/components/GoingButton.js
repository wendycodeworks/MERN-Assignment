import React, {useState, useContext} from 'react'
import { Redirect } from 'react-router-dom'
import UserContext from '../../context/UserContext';
import axios from 'axios'

const GoingButton = (props) => {
    const [going, setGoing] = useState(false)
    const { userContext, setUserContext } = useContext(UserContext);

    // Need to pull in userId from session or login 

    function sendResponse(){
        if (userContext.token){
          axios.post(`https://shrouded-refuge-96179.herokuapp.com/event/${props.eventId}/attendee`, {
               _id:`${props.eventId}`,
               attendee: userContext._id,
               token: userContext.token
          })
          .then((res) => {
            alert("Great success! You're on the attendees list" )
            setGoing(true)
            console.log(res)
          }) .catch((error) => {
            console.log(error)
          })
        } else {
          alert("Please login in to RSVP to this techmeet!")

        }

    }

    return(
        <div>
            <button className="button is-block is-fullwidth is-success is-medium" onClick={sendResponse}>Going</button>
            {going && <Redirect to="/events"/>}
        </div>
    )
}

export default GoingButton
