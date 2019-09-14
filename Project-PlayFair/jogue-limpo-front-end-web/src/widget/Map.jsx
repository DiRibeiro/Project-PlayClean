import React from 'react'

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

const map = (
    <Map center={[-29.895021, -50.272371]} zoom={13} height={300}>
        <Marker anchor={[-29.895021, -50.272371]} payload={1} onClick={({ event, anchor, payload }) => {}} />
        <Marker anchor={[-29.892021, -50.272171]} payload={1} onClick={({ event, anchor, payload }) => {}} />

        <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
            <img src='pigeon.jpg' width={240} height={158} alt='' />
        </Overlay>
    </Map>
)

export default props => (
    <div className="col-md-12" id="map" >
        { map }
    </div>
)