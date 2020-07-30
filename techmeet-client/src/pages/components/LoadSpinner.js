import React from 'react'
import 'bulma'
import RingLoader from "react-spinners/RingLoader"

function LoadSpinner(){
    return(
        <div className="hero is-large">
            <div className="columns">
                <div className="column is-4"></div>
                    <div className="column is-4 has-text-centered">
                    <RingLoader 
                    size={150}/>
                    </div> 
                <div className="column is-4"></div>
            </div>
        </div>
        
        
    )
}


export default LoadSpinner