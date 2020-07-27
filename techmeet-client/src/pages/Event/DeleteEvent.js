import React from 'react';
import axios from 'axios';

const DeleteEvent = ({eventId, onDelete}) => {

    function deleteEvent() {

        axios.delete(`https://shrouded-refuge-96179.herokuapp.com/${eventId}`)
        .then(onDelete)
    
    }

    return <button onClick={deleteEvent}> Delete </button>
}

export default DeleteEvent
