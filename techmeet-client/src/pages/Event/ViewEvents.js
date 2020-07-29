import React, {useEffect, useState} from 'react';
import axios from 'axios'
import RingLoader from "react-spinners/RingLoader"
import { Link } from 'react-router-dom'

const ViewEvents = () => {
    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        axios.get(`https://shrouded-refuge-96179.herokuapp.com/event`)
        .then(res => {
            setIsLoading(false)
            setEvents(res.data)
        })
        .catch(e => {
            setErrorMessage("There was a problem, please refresh and try again")
            setIsLoading(false)
        })
}, [])

    function renderEvents(){
        return (
            <>
                {events.map((event) => (
                        <div className="container">
                            <div className="columns">
                                <div className="column is-3"></div>
                                    <div className="column is-6">   
                                        <Link to={`/event/${event._id}`} className="card">
                                            <div className="card-header">
                                                <div className="card-header-title">{event.title}</div>    
                                            </div>                
                                        </Link>
                                    </div>
                                <div className="column is-3"></div>
                            </div>
                        </div>
                ))}     
                
            </>
        )
    }
    
    return (
        <div>
            <div className="hero is-small">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">
                            Latest events
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container mt-6">
                {errorMessage && <h3>{errorMessage}</h3>}
                {!isLoading ? renderEvents():
                        <RingLoader
                        size={150}
                        color={"#123abc"}
                        />}
            </div>
        </div>

        
    )

}

    

export default ViewEvents