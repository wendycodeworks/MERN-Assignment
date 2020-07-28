import React, {useState, useEffect} from 'react'

const GoingButton = (props) => {
    const [going, setGoing] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    // Need to pull in userId from session or login 

    function sendResponse(){
        if (userId){
            axios.put(`url/event/${props.eventId}`, {
              event: {
              attendees: [userId, "Going"]
              }
            })
            .then(() => setGoing("Going"))
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