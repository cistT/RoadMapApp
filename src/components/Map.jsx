import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import MapMaker from "./Map/MapMarker";

const Map=({
  defaultPosition,
  displayMapIcons,
  saveProgress,
  updateMapData,
  archiveMapData
})=> {
    const {latitude,longitude}=defaultPosition;
  return (
    <>

      <MapContainer
        center={[latitude,longitude]}
        zoom={13}
        scrollWheelZoom
        centerUpdate
        zoomControl={false}
        style={{ height: "90vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {
            displayMapIcons.map((data)=>(
            <MapMaker
              mapData={data}
              key={data.id}
              saveProgress={saveProgress}
              updateMapData={updateMapData}
              archiveMapData={archiveMapData}
            />
            ))
          }
        </MapContainer>
    </>
  );
}

export default Map;