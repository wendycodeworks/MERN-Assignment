import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios'
import GoogleMaps from '../components/GoogleMaps'
import UserContext from '../../context/UserContext'
import GoingButton from '../components/GoingButton'

const ViewEvent = (props) => {
    const [event, setEvent] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")
    const [users, setUsers] = useState("")
    const { userContext, setUserContext } = useContext(UserContext);

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
        axios.get("https://shrouded-refuge-96179.herokuapp.com/user", {
            params: {
                token: userContext.token
            }
        })
             .then((res) => {
                 setIsLoading(false);
                 setUsers(res.data)
             })
             .catch(e => {
                 setErrorMessage("There was a problem, please refresh and try again");
                 setIsLoading(false);
             })
    }, [])

    // function renderAttendees() {
    //     if(event.attendees) {
    //      return(
    //         <ol>
    //           {
    //               event.attendees.map((attendee) => {
    //                   return <li className="ml-4">{ attendee }</li>
    //               })
    //           }
    //         </ol>
    //      );
    //     }
    // }

    function renderAttendees() {
        if (event.attendees && users) {
           let names = new Array;
            event.attendees.forEach((attendee) => {
                users.forEach((user) => {
                    if (user._id === attendee) {
                        names.push(`${user.firstName} ${user.lastName}`);
                    }
                });
            });

            return names.map((name) => {
                return <li> { name } </li>
            });
        }
    }

    return (
       <div className="container is-half mt-6 is-block-mobile">
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
                            <div className="tile is-child box">
                              <GoingButton eventId={ event._id }/>
                            </div>
                      <div className="tile is-child box"><GoogleMaps // location={ {
                          //latitude: event.location.latitude,
                          //longitude: event.location.longitude
                      // } }
                          /></div>
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
