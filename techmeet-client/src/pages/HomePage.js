import React, {Component} from 'react';
import BrowseButton from './components/BrowseButton'
import EventCard from './components/EventCard'
import 'bulma';

class HomePage extends Component {
    render() {
    return (
        <>
        <div> 
            <section className="hero is-fullheight-with-navbar is-mobile" 
            style= {{backgroundImage: `url(${require("./components/assets/techmeet-landing-page.png")})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}} >
                <div className="hero-body is-medium ml-6">
                    <div className="container">
                        <h1 className="title is-1">
                            Events near you
                        </h1>
                            <h2 className="subtitle">
                                Your local tech ecosystem at your finger tips
                            </h2>
                            <BrowseButton />
                    </div>                    
                </div>
                </section>
            <section>
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Top picks
                        </h1>
                        <EventCard />
                    </div>
                </div>
            </section>
        </div>
        </>
        );
    }
}


export default HomePage;