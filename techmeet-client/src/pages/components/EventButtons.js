import React from 'react';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useState } from 'react';
import EditEvent from '../Event/EditEvent';
import GoingButton from './GoingButton';

const EventButtons = (props) => {
    const {userContext} = useContext(UserContext)
    const {owner, setOwner} = useState("")

    function displayButtons(){
        if (userContext._id === owner) {
            return(
                <EditEvent eventId={`${props.eventId}`}/>
            )
        } else {
            return(
                <GoingButton eventId={`${props.eventId}`}/>
            )
        }
    }
}

export default EventButtons