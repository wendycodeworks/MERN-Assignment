import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//     width: '100%',
//     height: '100%'
// };

class MapContainer extends Component {
    render() {
        return (
            <div className="card" style={{ position: 'relative', width: '85vw', height: '40vh' }}>
                <Map
                    google={this.props.google}
                    zoom={14}
                    // style={mapStyles}
                    initialCenter={{
                    lat: -1.2884,
                    lng: 36.8233
                    }}
                />
          </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB3u-JVUVm0vozBH1hr-unEkxErcWlxobA'
  })(MapContainer);