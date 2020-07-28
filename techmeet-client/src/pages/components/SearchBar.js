import React, {Component} from 'react'
import 'bulma'

class SearchBar extends Component {

    render(){
    return(
        <div>
            <div className="field is-grouped">
                    <p className="control is-expanded">
                        <input className="input" type="text" placeholder="Search events"/>
                    </p>
                    <p className="control">
                        <a className="button is-info">
                        Search
                        </a>
                    </p>
            </div>
        </div>
    )
    }
}

export default SearchBar