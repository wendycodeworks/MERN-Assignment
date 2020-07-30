import React, {useState, useContext} from 'react'
import UserContext from '../../context/UserContext';
import axios from 'axios'

const GoingButton = (props) => {
    const [going, setGoing] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const { userContext, setUserContext } = useContext(UserContext);

    // Need to pull in userId from session or login 

    function sendResponse(){
        if (userContext.token){
          axios.put(`https://shrouded-refuge-96179.herokuapp.com/event/${props.eventId}/attendee`, {
              _id:`${props.eventId}`,
               attendee: userContext._id
          })
          .then((res) => {
            alert("Great success!")
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
        </div>
    )
}

export default GoingButton