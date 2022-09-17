import Leaflet from "leaflet";
import { Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";

import { css } from "@emotion/react";

import DitailDialog from "../../DitailDialog/DitailDialog";

import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
    color: "blue",
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;

const MapMaker = ({ mapData, saveProgress, dbMessages }) => {
    const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${mapData.latitude},${mapData.longitude}`;

    return (
        <Marker
            position={[mapData.latitude, mapData.longitude]}
            css={styles.leaflet}
        >
            <Tooltip direction="top">
                {mapData.id + " " + mapData.place} 
                <br/>
                {(mapData.respondent_name || "不明") + "さん 受付日:" + mapData.timestamp }
            </Tooltip>
            <Popup>
                <div css={styles.popupContainer}>
                    <span css={styles.place}>
                        {mapData.id + " " + mapData.place}
                    </span>
                    <br />
                    {mapData.respondent_name
                        ? mapData.respondent_name + " さん"
                        : "依頼者不明"}
                    <br />
                    <div css={styles.buttonContainer}>
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
                </div>
                <DitailDialog
                    mapData={mapData}
                    saveProgress={saveProgress}
                    dbMessages={dbMessages}
                    listLabel="詳細確認"
                    variant="outlined"
                />
            </Popup>
        </Marker>
    );
};

const styles = {
    popupContainer: css`
        white-space: nowrap;
        min-width: 200px;
        max-width: 300px;
        height: 110px;
        font-size: 15px;
    `,
    googleMapButton: css`
        color: black;
        width: 100%;
        text-transform: none;
        margin: 5px;
    `,
    buttonContainer: css`
        text-align: center;
    `,
    place: css`
        font-weight: bold;
        font-size: 20px;
    `,
    leaflet: css`
        color: white;
    `,
};

export default MapMaker;
