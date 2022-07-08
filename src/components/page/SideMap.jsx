import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import icon from "leaflet/dist/images/marker-icon.png";

let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;


const SideMap=({
    mapData
})=>{

    return (
        <>
            <MapContainer
                center={[mapData.latitude, mapData.longitude]}
                zoom={14}
                scrollWheelZoom
                zoomControl={false}
                centerUpdate
                style={{
                    height: "40vh",
                    width: "40vw",
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                    <Marker position={[mapData.latitude, mapData.longitude]} markerColor="red">
                    </Marker>
            </MapContainer>
        </>
    )
}

export default SideMap;