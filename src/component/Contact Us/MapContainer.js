// import React from 'react';
import React, {Component} from 'react';
// import { YMaps, Map, Placemark } from 'react-yandex-maps';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const styleMainMap = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
};
//
// const MapContainer = () => (
//
//     <YMaps>
//     <Map
// style={styleMainMap}
// defaultState={{ center: [41.308374, 69.270771], zoom: 17 }}
// >
// <Placemark geometry={[41.308374, 69.270771]} />
// </Map>
// </YMaps>
// );
// export default MapContainer;

class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={18}
                style={styleMainMap}
                initialCenter={{lat: 41.308374, lng: 69.270771}}
            >
                <Marker position={{lat: 41.308374, lng: 69.270771}}/>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyB9TjZ738gEUOCYu0YJSjvSu18eVFJAHkQ"
})(MapContainer);