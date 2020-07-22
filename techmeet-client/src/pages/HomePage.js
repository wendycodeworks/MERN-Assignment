import React, {Component} from 'react';
import Navbar from './components/NavBar';
import Events from './Events'
import AddEvent from './Event/AddEvent'


class HomePage extends Component {
    render() {
    return (
        <>
        <Navbar />
        <Events />
        <div> Hello World </div>
        <AddEvent />
        </>
        );
    }
}


export default HomePage;