import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import MapMaker from "./components/MapMarker";

const Map = ({
    defaultPosition,
    displayMapIcons,
    saveProgress,
    dbMessages,
}) => {
    const { latitude, longitude } = defaultPosition;
    return (
        <>
            <MapContainer
                center={[latitude, longitude]}
                zoom={13}
                scrollWheelZoom
                centerUpdate
                zoomControl={false}
                style={{ height: "88vh", width: "100vw" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {displayMapIcons.map((data) => (
                    <MapMaker
                        mapData={data}
                        saveProgress={saveProgress}
                        dbMessages={dbMessages.filter(
                            (message) => message.id === data.id
                        )}
                        key={data.id}
                    />
                ))}
            </MapContainer>
        </>
    );
};

export default Map;
