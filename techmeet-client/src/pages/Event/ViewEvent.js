import React, {useEffect, useState} from 'react';
import axios from 'axios'

const Event = (props) => {
    const [event, setEvent] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        axios.get(`https://shrouded-refuge-96179.herokuapp.com/event/`)
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
       <div className="container is-half mt-6">
            <div className="tile is-ancestor">

                <div className="tile is-parent is-vertical">
                        <div className="tile is-child box">
                        <p className="title">Linux Environment for Absolute Noobs</p>
                        </div>
                        <div className="tile is-child box">
                        <p className="title is-5">About</p>
                        <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero iure, harum facilis voluptas quam similique saepe eum. Perspiciatis, corrupti tempore quis at voluptatum deleniti eaque magni itaque earum mollitia eveniet laboriosam illo corporis assumenda! Velit, facere necessitatibus error est laborum eligendi! Quisquam nulla quos vero officiis aspernatur aperiam quidem at.</p>
                        </div>
                </div>
            
                <div className="tile is-4 is-vertical is-parent">
                    <div className="tile is-child box">
                    <p className="title">Details</p>
                    <p className="title is-5">Date</p>
                    <p className="title is-5">Time</p>
                    <p className="title is-5">Location</p>
                    </div>
                    <div className="tile is-child box">
                    <p className="title">Attendees</p>
                    </div>
                </div>

            </div>
       </div>
    )
}

export default Event