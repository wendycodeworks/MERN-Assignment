import React, {Component} from 'react';
import 'bulma';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'

class BrowseButton extends Component{
    render(){
        return(
            <div>
                <Link to="/events"><div className="button is-info is-rounded is-medium">
                    <div>Browse events   </div>
                    <div className="has-text-info">-</div>
                    <i className="fa fa-arrow-right" aria-hidden="true"/>
                </div>
                </Link>
            </div>
        )
    }
}

export default BrowseButton