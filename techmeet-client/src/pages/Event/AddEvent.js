import React, { useState } from 'react';
import axios from 'axios';
import {Redirect} from 'react-dom';

const AddEvent = () => {

  const [eventTitle, setEventTitle] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [eventTime, setEventTime] = useState("")
  const [eventLocation, setEventLocation] = useState("")
  const [eventBanner, setEventBanner] = useState("")
  const [isCreated, setIsCreated] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
    
  function addEvent(){
    if (eventTitle && eventDescription && eventDate && eventTime && eventLocation && eventBanner){
      axios.post(`url/events`, {
        event: {
          title: eventTitle,
          description: eventDescription,
          date: eventDate,
          time: eventTime,
          location: eventLocation, 
          banner: eventBanner
        }
      })
      .then(() => setIsCreated(true))
      .then(() => setSuccessMessage("Yay! Event created!"))
    } else {
      setErrorMessage("Required values!")
    }
  }

  return (
    <div className="AddEventForm" style={{ margin: "0 250px" }}>
      {errorMessage}
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
                    name="description"
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
                    name="date"
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
                    name="time"
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
                    name="location"
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
                    name="banner"
                    accept="image/*"
                    value={eventBanner}
                    onChange={e => setEventBanner(e.target.value)}
                  />
                </div>
    
                <button onClick={addEvent}>Submit</button>
                
                {isCreated && successMessage && <Redirect to="/" />}
              </form>
            
            </div>

  )
}



export default AddEvent