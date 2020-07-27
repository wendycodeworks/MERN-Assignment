import React, {useEffect, useState} from 'react';

const Event = (props) => {

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        axios.get(`https://shrouded-refuge-96179.herokuapp.com/events`)
            .then(res => {
                setIsLoading(false)
                setEvent(res.data)
            })
            .catch(e => {
                setErrorMessage("There was a problem, please refresh and try again")
                setIsLoading(false)
            })
    }, [])

    return (
        <div>
        </div>
    )
}

export default Events