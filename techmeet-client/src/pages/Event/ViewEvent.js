import React, {useEffect, useState} from 'react';

const Event = (props) => {
    const [event, setEvent] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        axios.get(`url/events/${props.eventId}`)
            .then(res => {
                setIsLoading(false)
                setEvent(res.data)
            })
            .catch(e => {
                setErrorMessage("There was a problem, please refresh and try again")
                setIsLoading(false)
            })
    }, [])

    return (
        <div>
               {errorMessage && <h3>{errorMessage}</h3>}
            {!isLoading ? 
                <li>{event.title} {event.date}</li> : 
                <h2>Loading...</h2>
            }
        </div>
    )
}

export default Event