import React from 'react'

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

const MapInstance = props => {

    const provider = (x, y, z) => {
        const s = String.fromCharCode(97 + ((x + y + z) % 3))
        return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`;
        
    }

    const renderMarker = () => {
        let list = props.map.list

        return list.map((element, index) => {
            const coord = [ element.anchor.lat, element.anchor.long ]
            return (<Marker key={ index } anchor={ coord } payload={ 1 } onClick={ ({ event, anchor, payload }) => {} } />)
        })
    }

    return (
        <div className="col-md-12" id="map" >
            <Map center={[-29.895021, -50.272371]} zoom={13} height={300} provider={provider}>
                { renderMarker() }
                <Overlay anchor={[-29.890000, -50.271000]} />
            </Map>
        </div>
    )
}

export default MapInstance