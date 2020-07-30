import React, {useEffect, useState} from 'react';
import axios from 'axios'
import GoogleMaps from '../components/GoogleMaps'

const ViewEvent = (props) => {
    const [event, setEvent] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        axios.get(`https://shrouded-refuge-96179.herokuapp.com/event/${props.eventId}`)
            .then(res => {
                setIsLoading(false)
                setEvent(res.data)
            })
            .catch(e => {
                setErrorMessage("There was a problem, please refresh and try again")
                setIsLoading(false)
            })
    }, [])

    
    function renderAttendees() {
        if(event.attendees) {
         return(
            <ol>
              {
                  event.attendees.map((attendee) => {
                      return <li className="ml-4">{ attendee }</li>
                  })
              }
            </ol>
         );
        }
    }



    return (
       <div className="container is-half mt-6">
           <div className="tile is-ancestor">
            <div className="tile is-parent is-vertical">
                            <div className="tile is-child is-8 box">
                                <p className="title">{event.title}</p>
                                </div>
                </div>
           </div>
            <div className="tile is-ancestor">  
                <div className="tile is-parent"> 
                    <div className="tile is-child box">
                                <p className="title is-5">About</p>
                                    <p className="text">{event.description}</p>                    
                    </div>   
                            
                </div>         
                    <div className="tile is-4 is-vertical is-parent">
                        <div className="tile is-child box">
                            <p className="title">Details</p>
                                <p className="title is-5">Date & Time</p>
                                    <p className="text">{event.date}</p>
                                        <p className="title is-5">Location</p>
                                            <p className="text">{event.location}</p>
                        </div>
                        <div className="tile is-child box"><GoogleMaps /></div>
                            <div className="tile is-child box">
                                <p className="title">Attendees</p>
                              {renderAttendees()}
                                   
                        </div>
                    </div>
                </div>

       </div>
    )
}

export default ViewEvent
