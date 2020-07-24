import React from 'react';
import axios from 'axios';

const DeleteEvent = ({eventId, onDelete}) => {

    function deleteEvent() {

        axios.delete(`url${eventId}`)
        .then(onDelete)
    
    }

    return <button onClick={deleteEvent}> Delete </button>
}

export default DeleteEvent
