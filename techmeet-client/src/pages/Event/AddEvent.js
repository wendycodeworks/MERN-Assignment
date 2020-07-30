import React, { useState, useContext } from 'react';
import axios from 'axios';
import {Redirect} from 'react-dom';
import 'bulma'
import UserContext from "../../context/UserContext";
import DateTimePicker from "react-datetime-picker";
import Autocomplete from "react-google-autocomplete";

const AddEvent = () => {

  const [eventTitle, setEventTitle] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [eventLocation, setEventLocation] = useState("")
  const [eventBanner, setEventBanner] = useState("")
  const [isCreated, setIsCreated] = useState(false)
  const { userContext, setUserContext } = useContext(UserContext);
  const [dateTime, setDateTime] = useState(new Date());
    
  function addEvent(){
    if (eventTitle && eventDescription && dateTime && eventLocation){
      axios.post(`https://shrouded-refuge-96179.herokuapp.com/event`, {
          title: eventTitle,
          description: eventDescription,
          date: dateTime,
          token: userContext.token,
          owner: userContext._id,
          latitude: eventLocation.geometry.location.lat,
          longitude: eventLocation.geometry.location.lng
      })
      .then((res) => {
        alert("Great success!")
        console.log(res)
      }) .catch((error) => {
        console.log(error)
      })
    } else {
      alert("Please complete all values!")
    }
  }

  return (
    <div className="container is-fluid">
      <div className="columns is-mobile">
        <div className="column is-3"></div>
          <div className="column is-5 is-centered mt-6">
            <h1 className="title has-text-centered">Create your Techmeet</h1>
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
                        onChange={(date) => setDateTime(date)}
                        value={dateTime}
                      />

                    </div>

                    <div className="field">
                      <label className="label">Location</label>
                      <Autocomplete
                        apiKey={"AIzaSyDMvUjLl8yiltFAdxUHzFVJxW0sGt1rEVI"}
                        style={{width: '90%'}}
                        onPlaceSelected={(place) => setEventLocation(place)}
                        types={['(regions)']}
                        componentRestrictions={{country: "au"}}
                      />
                    </div>

                      <button className="button is-primary is-fullwidth is-medium is-rounded my-5" onClick={addEvent}>Submit</button>
                      {isCreated && <Redirect to="/" />}
                    </div>
                  </div>
                <div className="column is-4"></div>
            </div>

  )
}



export default AddEvent
