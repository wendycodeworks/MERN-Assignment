import React from 'react'

export default function AttendeesList({attendee, index}) {
    return(
    <li>{index}. {attendee}</li>
    )
}