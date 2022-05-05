import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import {Button} from '@mui/material';


let DefaultIcon = Leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;

const Map=({defaultPosition,mapData})=> {
    const {latitude,longitude}=defaultPosition;

  return (
    <>

      <MapContainer center={[latitude,longitude]} zoom={13} scrollWheelZoom centerUpdate style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {mapData.map((data)=>(
            <Marker position={[data.latitude, data.longitude]} key={data.id}>
              {/* 別コンポーネントに分けたほうがいいかも */}
                <Popup>
                  <div style={{whiteSpace: 'pre-line'}}>
                    {data.place}<br/>{data.message}
                    {/* <Button>編集</Button> */}
                  </div>
                </Popup>
            </Marker>
          ))}
        </MapContainer>
    </>
  );
}

export default Map;