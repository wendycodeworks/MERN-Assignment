import React, {useState, useEffect} from 'react'

const RSVPButton = (props) => {
    const [rsvp, setRSVP] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    // Need to pull in userId from session or login 

    function sendResponse(){
        if (userId){
            axios.put(`url/events/${props.eventId}`, {
              event: {
              attendees: [userId, "Going"]
              }
            })
            .then(() => setRSVP("Going"))
            .then(() => setSuccessMessage("Yay! RVSP sent!"))
          } else {
            setErrorMessage("Required values!")
          }
    }

    return(
        <div>
            <button onClick={sendResponse}>Going</button>
        </div>
    )
}

export default RSVPButton