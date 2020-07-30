import React, { useState, useEffect, useContext } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios'
import DateTimePicker from "react-datetime-picker"
import UserContext from '../../context/UserContext';
import DeleteEvent from './DeleteEvent';

const EditEvent = (props) => {
    const [eventTitle, setEventTitle] = useState("")
    const [eventDescription, setEventDescription] = useState("")
    const [eventDateTime, setEventDateTime] = useState("")
    const [eventLocation, setEventLocation] = useState("")
    const [eventBanner, setEventBanner] = useState("")
    const [eventOwner, setEventOwner] = useState("")
    const [isEdited, setIsEdited] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
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
            setEventOwner(res.data.owner)
        })
        .catch(e => {
            setErrorMessage("There was a problem, please refresh and try again")
            setIsLoading(false)
        })
    }, [])

    function editEvent(){
        if (eventTitle && eventDescription && eventDateTime && eventLocation){
            axios.put(`https://shrouded-refuge-96179.herokuapp.com/event/${props.eventId}`, {
          
                title: eventTitle,
                description: eventDescription,
                date: eventDateTime,
                location: eventLocation, 
                banner: eventBanner,
                owner: eventOwner,
                token: userContext.token
            })
            .then(() => {
              setIsEdited(true)
              alert("Yay! Event updated!")
            })
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

                            
                          <div className="field">
                              <label className="label">Event Banner</label>
                                <label className="file-label">
                                  <input className="file-input" type="file" 
                                  name="banner"
                                  accept="image/*"
                                  value={eventBanner}
                                  onChange={e => setEventBanner(e.target.value)}/>
                                  <span className="file-cta">
                                    <span className="file-icon">
                                      <i className="fa fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                      Choose a file…
                                    </span>
                                  </span>
                                </label>
                            </div>
                            {/* <div className="buttons">
                            <button className="button is-primary is-medium is-rounded my-5" onClick={editEvent}>Submit</button>
                            {isEdited && <Redirect to={`/event/${props.eventId}`}/>}
                            <DeleteEvent eventId={`${props.eventId}`}/>
                            </div> */}
                            <div class="field is-grouped">
                                <p className="control">
                                  <button className="button is-link" onClick={editEvent}>
                                    Save changes
                                  </button>
                                  {isEdited && <Redirect to={`/event/${props.eventId}`}/>}
                                </p>
                                <p class="control">
                                  <button class="button" onClick={<Redirect to={`/event/${props.eventId}`}/>}>
                                    Cancel
                                  </button>
                                </p>
                                <p class="control">
                                  <DeleteEvent eventId={`${props.eventId}`}/>
                                </p>
                              </div>
                          </div>
                        </div>
                      <div className="column is-4"></div>
      </div>

)
}

export default EditEvent 