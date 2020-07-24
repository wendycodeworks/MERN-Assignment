import React, {useState, useEffect} from 'react'

const RSVPButton = (props) => {
    const [rsvp, setRSVP] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    function sendResponse(){
        if (eventTitle && eventDescription && eventDate && eventTime && eventLocation && eventBanner){
            axios.put(`url/events/${props.eventId}`, {
              event: {
              attendees: [userId, rsvp]
              }
            })
            .then(() => setIsEdited(true))
            .then(() => setSuccessMessage("Yay! RVSP sent!"))
          } else {
            setErrorMessage("Required values!")
          }
    }

    return(
        <div>
            <button onClick={sendResponse}>RSVP</button>
        </div>
    )
}

export default RSVPButton