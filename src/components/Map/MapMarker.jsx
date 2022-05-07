import Leaflet from "leaflet";
import {Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from "leaflet/dist/images/marker-icon.png";

import DitailDialog from "../Dialog/DitailDialog";
import FormDialog from "../Dialog/FormDialog";
import ArchiveDialog from "../Dialog/ArchiveDialog";

let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
    color:'red'
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;

const MapMaker =({mapData,saveProgress,updateMapData,archiveMapData})=>{

    return (
        <Marker position={[mapData.latitude, mapData.longitude]}>
            <Popup>
                <div style={{whiteSpace: 'pre-line',width:'200px',height:'100px'}}>
                    {mapData.place}<br/>{mapData.message}
                </div>
                <div style={{display: 'flex',}}>
                    <DitailDialog
                        mapData={mapData}
                        saveProgress={saveProgress}
                        listLabel="閲覧"
                        variant="outlined"
                    />
                    <FormDialog
                        mapData={mapData}
                        updateMapData={updateMapData}
                    />
                    <ArchiveDialog
                        mapData={mapData}
                        archiveMapData={archiveMapData}
                    />
                </div>
            </Popup>
        </Marker>
    )
}

export default MapMaker;