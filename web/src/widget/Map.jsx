import * as React from 'react';
import { Map } from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';

const DEFAULT_CENTER = [-29.895021, -50.272371];

export default function MapInstance({
  map = { list: [] },
  center = DEFAULT_CENTER,
  zoom = 13,
  height = 300,
}) {
  const provider = React.useCallback((x, y, z) => {
    const s = String.fromCharCode(97 + ((x + y + z) % 3)); // a/b/c
    return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`;
  }, []);

  const markers = Array.isArray(map?.list) ? map.list : [];

  return (
    <div className="col-md-12" id="map">
      <Map center={center} zoom={zoom} height={height} provider={provider}>
        {markers.map((el, idx) => {
          const lat = el?.anchor?.lat;
          const lng = el?.anchor?.long;
          if (typeof lat !== 'number' || typeof lng !== 'number') return null;
          return (
            <Marker
              key={el._id || idx}
              anchor={[lat, lng]}
              payload={el.payload ?? 1}
              onClick={() => {}}
            />
          );
        })}
        <Overlay anchor={center} />
      </Map>
    </div>
  );
}
