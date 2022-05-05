import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";



let DefaultIcon = Leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;


const SideMap=({
    mapData
})=>{

    return (
        <>
            <MapContainer 
                center={[mapData.latitude, mapData.longitude]}
                zoom={15}
                scrollWheelZoom
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
                    <Marker position={[mapData.latitude, mapData.longitude]} key={mapData.id}>
                    {/* 別コンポーネントに分けたほうがいいかも */}
                        {/* <Popup>
                            <div style={{whiteSpace: 'pre-line'}}>
                                {mapData.place}<br/>{mapData.message}
                            </div>
                        </Popup> */}
                    </Marker>
            </MapContainer>
        </>
    )
}

export default SideMap;