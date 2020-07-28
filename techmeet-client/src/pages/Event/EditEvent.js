import React, { useState, useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios'

const EditEvent = (props) => {
    const [eventTitle, setEventTitle] = useState("")
    const [eventDescription, setEventDescription] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [eventTime, setEventTime] = useState("")
    const [eventLocation, setEventLocation] = useState("")
    const [eventBanner, setEventBanner] = useState("")
    const [isEdited, setIsEdited] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        axios.get(`url/events/${props.eventId}`)
        .then(res => {
            setIsLoading(false)

            setEventTitle(res.data.title)
            setEventDescription(res.data.description)
            setEventDate(res.data.date)
            setEventTime(res.data.time)
            setEventLocation(res.data.location)
            setEventBanner(res.data.banner)
        })
        .catch(e => {
            setErrorMessage("There was a problem, please refresh and try again")
            setIsLoading(false)
        })
    }, [])

    function editEvent(){
        if (eventTitle && eventDescription && eventDate && eventTime && eventLocation && eventBanner){
            axios.put(`url/events/${props.eventId}`, {
              event: {
                title: eventTitle,
                description: eventDescription,
                date: eventDate,
                time: eventTime,
                location: eventLocation, 
                banner: eventBanner
              }
            })
            .then(() => setIsEdited(true))
            .then(() => setSuccessMessage("Yay! Event updated!"))
          } else {
            setErrorMessage("Required values!")
          }
    }

    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
            {!isLoading ?
            <form encType="multipart/form-data">
    
            <div className="form-field">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter event title"
                value={eventTitle}
                onChange={e => setEventTitle(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Description:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter event description"
                value={eventDescription}
                onChange={e => setEventDescription(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Date:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter date in the format dd-mm-yyyy"
                value={eventDate}
                onChange={e => setEventDate(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Time:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter date in the format dd-mm-yyyy"
                value={eventTime}
                onChange={e => setEventTime(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Location:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter location"
                value={eventLocation}
                onChange={e => setEventLocation(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Event Banner:</label>
              <input
                type="file"
                className="form-control"
                placeholder="Upload event banner"
                accept="image/*"
                value={eventBanner}
                onChange={e => setEventBanner(e.target.value)}
              />
            </div>

            <button onClick={editEvent}>Submit</button>
            
            {isEdited && successMessage && <Redirect to="/" />}
          </form> :
          <h2>Loading...</h2>    
        }
        </div>
    )

}
export default EditEvent 