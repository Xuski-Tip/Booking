import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
const styleMainMap = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
};

const MapContainer = () => (
    <YMaps>
    <Map
style={styleMainMap}
defaultState={{ center: [41.308374, 69.270771], zoom: 17 }}
>
<Placemark geometry={[41.308374, 69.270771]} />
</Map>
</YMaps>
);
export default MapContainer;