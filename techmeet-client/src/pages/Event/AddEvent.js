import React, { useState, useContext } from 'react';
import axios from 'axios';
import {Redirect} from 'react-dom';
import 'bulma'
import UserContext from "../../context/UserContext";

const AddEvent = () => {

  const [eventTitle, setEventTitle] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [eventTime, setEventTime] = useState("")
  const [eventLocation, setEventLocation] = useState("")
  const [eventBanner, setEventBanner] = useState("")
  const [isCreated, setIsCreated] = useState(false)
  // const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
    const { userContext, setUserContext } = useContext(UserContext);
    
  function addEvent(){
    if (eventTitle && eventDescription && eventDate && eventLocation){
      axios.post(`https://shrouded-refuge-96179.herokuapp.com/event`, {
        event: {
          title: eventTitle,
          description: eventDescription,
          date: eventDate,
          location: eventLocation
        }
      })
      .then((res) => {
        setIsCreated(true)
        console.log(res)
      }) .catch((error) => {
        console.log(error)
      })
    } else {
      setErrorMessage("Required values!")
    }
  }

  return (
    <div className="container is-fluid has-text-centred">
      <div className="columns is-mobile is-centred">
        {errorMessage}
        <div className="column is-half is-centred">
                  <div className="field">
                    <label className="label">Title:</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter event title"
                      value={eventTitle}
                      onChange={e => setEventTitle(e.target.value)}
                    />
                  </div>
      
                  <div className="field">
                    <label className="label">Description:</label>
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
                    <label className="label">Date:</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter date in the format dd-mm-yyyy"
                      name="date"
                      value={eventDate}
                      onChange={e => setEventDate(e.target.value)}
                    />
                  </div>

                  <div className="field">
                    <label className="label">Location:</label>
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
                    <label className="label">Event Banner:</label>
                    <input
                      type="file"
                      className="input"
                      placeholder="Upload event banner"
                      name="banner"
                      accept="image/*"
                      value={eventBanner}
                      onChange={e => setEventBanner(e.target.value)}
                    />
                  </div>
      
                  <button className="button is-block is-fullwidth is-primary is-medium is-rounded" onClick={addEvent}>Submit</button>
                  
                  {isCreated && <Redirect to="/" />}
                  </div>
            </div>
          </div>

  )
}



export default AddEvent
