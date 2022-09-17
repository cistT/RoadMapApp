import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { css } from "@emotion/react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

let IncompleteIcon = Leaflet.icon({
    iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
});
let CompleteIcon = Leaflet.icon({
    iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png",
});

const SideMap = ({ mapData }) => {
    const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${mapData.latitude},${mapData.longitude}`;

    return (
        <div css={styles.container}>
            <MapContainer
                center={[mapData.latitude, mapData.longitude]}
                zoom={14}
                scrollWheelZoom
                zoomControl={false}
                centerUpdate
                css={styles.MapContainer}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={[mapData.latitude, mapData.longitude]}
                    icon={
                        //進捗度に応じて、ピンの色を変更
                        mapData.progress === 100 ? CompleteIcon : IncompleteIcon
                    }
                >
                    <Tooltip direction="top" permanent>
                        <div css={styles.tooltipContainer}>
                            {mapData.address}
                        </div>
                    </Tooltip>
                </Marker>
            </MapContainer>
            <Button
                href={googleMapUrl}
                target="_blank"
                variant="outlined"
                css={styles.googleMapButton}
                startIcon={<GoogleIcon />}
            >
                GoogleMapで確認
            </Button>
        </div>
    );
};

const styles = {
    container: css`
        text-align: center;
        margin-top: 5vh;
    `,
    MapContainer: css`
        height: 40vh;
        width: 40vw;
    `,
    googleMapButton: css`
        color: black;
        text-transform: none;
        margin: 5px;
    `,
    tooltipContainer: css`
        font-size: 15px;
    `,
};

export default SideMap;
