import React, { useState, useEffect, useContext } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios'
import DateTimePicker from "react-datetime-picker"
import UserContext from '../../context/UserContext';

const EditEvent = (props) => {
    const [eventTitle, setEventTitle] = useState("")
    const [eventDescription, setEventDescription] = useState("")
    const [eventDateTime, setEventDateTime] = useState("")
    const [eventLocation, setEventLocation] = useState("")
    const [eventBanner, setEventBanner] = useState("")
    const [isEdited, setIsEdited] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const {userContext, setUserContext} = useContext(UserContext)

    useEffect(() => {
        axios.get(`https://shrouded-refuge-96179.herokuapp.com/event/${props.eventId}`)
        .then(res => {
            setIsLoading(false)

            setEventTitle(res.data.title)
            setEventDescription(res.data.description)
            setEventDateTime(res.data.date)
            setEventLocation(res.data.location)
            setEventBanner(res.data.banner)
        })
        .catch(e => {
            setErrorMessage("There was a problem, please refresh and try again")
            setIsLoading(false)
        })
    }, [])

    function editEvent(){
        if (eventTitle && eventDescription && eventDateTime && eventLocation){
            axios.put(`https://shrouded-refuge-96179.herokuapp.com/event/${props.eventId}`, {
              event: {
                title: eventTitle,
                description: eventDescription,
                date: eventDateTime,
                location: eventLocation, 
                banner: eventBanner,
                owner: userContext.token
              }
            })
            .then(() => setIsEdited(true))
            .then(() => setSuccessMessage("Yay! Event updated!"))
          } else {
            setErrorMessage("Required values!")
          }
    }

    return (

                      
          <div className="container is-fluid">
            <div className="columns is-mobile">
              <div className="column is-3"></div>
                <div className="column is-5 is-centered mt-6">
                  <h1 className="title has-text-centered">Needs a bit of a polish?</h1>
                          <div className="field">
                            <label className="label">Title</label>
                              <input
                                type="text"
                                className="input"
                                placeholder="Enter event title"
                                value={eventTitle}
                                onChange={e => setEventTitle(e.target.value)}
                              />
                          </div>
              
                          <div className="field">
                            <label className="label">Description</label>
                              <input
                                type="text"
                                className="input"
                                placeholder="Enter event description"
                                name="description"
                                value={eventDescription}
                                onChange={e => setEventDescription(e.target.value)}
                              />
                          </div>
              
                          <div className="field">
                            <label className="label">Date & Time</label>
                            <DateTimePicker
                              onChange={(date) => setEventDateTime(date)}
                              value={eventDateTime}
                            />

                          </div>

                          <div className="field">
                            <label className="label">Location</label>
                            <input
                              type="text"
                              className="input"
                              placeholder="Enter location"
                              name="location"
                              value={eventLocation}
                              onChange={e => setEventLocation(e.target.value)}
                            />
                          </div>

                            
                          <div class="field">
                              <label className="label">Event Banner</label>
                                <label class="file-label">
                                  <input class="file-input" type="file" 
                                  name="banner"
                                  accept="image/*"
                                  value={eventBanner}
                                  onChange={e => setEventBanner(e.target.value)}/>
                                  <span class="file-cta">
                                    <span class="file-icon">
                                      <i class="fa fa-upload"></i>
                                    </span>
                                    <span class="file-label">
                                      Choose a file…
                                    </span>
                                  </span>
                                </label>
                            </div>
                            <button className="button is-primary is-fullwidth is-medium is-rounded my-5" onClick={editEvent}>Submit</button>
                            {isEdited && successMessage && <Redirect to="/" />}
                          </div>
                        </div>
                      <div className="column is-4"></div>
      </div>

)
}

export default EditEvent 