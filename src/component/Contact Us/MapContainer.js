// import React, { Component } from "react";
// import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import React from "react";
import { YMaps, Map,Placemark } from "react-yandex-maps";
const styleMainMap = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
};

const MapContainer = () => (

  <YMaps>
    <Map
      style={styleMainMap}
      defaultState={{ center: [41.308374, 69.270771], zoom: 9 }}
    >
       <Placemark geometry={[41.308374, 69.270771]} />
    </Map>
  </YMaps>
);
export default MapContainer;
// export class MapContainer extends Component {
//   state = {
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {},
//   };

//   onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true,
//     });

//   onMapClicked = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null,
//       });
//     }
//   };

//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         initialCenter={{
//           lat: 41.32600373537419,
//           lng: 69.29471623752877,
//         }}
//         onClick={this.onMapClicked}
//       >
//         <Marker onClick={this.onMarkerClick} name={"Current location"} />
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCUEvYoVSBC9JDZoCi0yTF9H5pPfewy6vU",
// })(MapContainer);
