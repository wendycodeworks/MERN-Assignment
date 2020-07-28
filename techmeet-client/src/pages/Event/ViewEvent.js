import React, {useEffect, useState} from 'react';
import axios from 'axios'

const Event = (props) => {
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

    return (
       <div class="container is-fluid">
           <div class="card mb-1">
                <header class="card-header">
                    <p class="card-header-title is-size-1">
                    Linux installation for absolute noobs
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a href="#"></a>. <a href="#">#css</a> <a href="#">#responsive</a>
                        <br/>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            </div>
            <div class="card">
               <div class="card-content">
                    <div class="content">

                    </div>
                </div>
            </div>
       </div>
    )
}

export default Event