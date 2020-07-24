import React, {useState, useEffect} from 'react'

const RSVPButton = (props) => {
    const [rsvp, setRSVP] = useState("")
    const [event, setEvent] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    
    useEffect(() => {
        axios.patch(`url/events/${props.eventId}`)
            .then(res => {
                setIsLoading(false)
                setEvent(res.data)
            })
            .catch(e => {
                setErrorMessage("There was a problem, please refresh and try again")
                setIsLoading(false)
            })
    }, [])

}

export default RSVPButton