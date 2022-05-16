import Leaflet from "leaflet";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";

import DitailDialog from "../../Dialog/DitailDialog";

let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
    color: "blue",
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;

const MapMaker = ({ mapData, saveProgress, dbMessages }) => {
    return (
        <Marker position={[mapData.latitude, mapData.longitude]}>
            <Popup>
                <div
                    style={{
                        whiteSpace: "pre-line",
                        width: "200px",
                        height: "100px",
                        fontSize: "15px",
                    }}
                >
                    {mapData.place}
                    <br />
                    メッセージ
                    <br />
                    {mapData.message}
                </div>
                <>
                    <DitailDialog
                        mapData={mapData}
                        saveProgress={saveProgress}
                        dbMessages={dbMessages}
                        listLabel="閲覧"
                        variant="outlined"
                    />
                </>
            </Popup>
        </Marker>
    );
};

export default MapMaker;
