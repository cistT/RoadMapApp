import React, { useState, useRef } from "react";

import { css } from "@emotion/react";

import Leaflet from "leaflet";
import { Tooltip, MapContainer, TileLayer, Marker } from "react-leaflet";

import { Dialog, Button, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import useDialog from "hooks/useDialog";
import usePostGAS from "hooks/usePostGAS";

let IncompleteIcon = Leaflet.icon({
    iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
});
let CompleteIcon = Leaflet.icon({
    iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png",
});
let alertIcon = Leaflet.icon({
    iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
});

let baseIcon = Leaflet.icon({
    iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png",
});

const MoveDialog = ({ mapData, moved, setMoved }) => {
    const markerRef = useRef(null);
    const { post } = usePostGAS();

    const date = new Date(mapData.timestamp);
    const now = new Date();
    const beforeOneMonth = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
    );

    const { open, _, handleClose } = useDialog(moved);

    const [markerPosition, setMarkerPosition] = useState(
        Leaflet.latLng([mapData.latitude, mapData.longitude])
    );

    const eventHandlers = {
        dragstart: () => {
            const marker = markerRef.current;
            marker.setOpacity(0.4);
        },
        dragend: () => {
            const marker = markerRef.current;
            marker.setOpacity(1);
            setMarkerPosition(marker.getLatLng());
        },
    };

    const handleClick = () => {

        post({
            id: mapData.id,
            latitude: markerPosition.lat,
            longitude: markerPosition.lng,
        });

        setMoved(false);
        window.location.reload();
    };

    const handleCancel = () => {
        handleClose();
        setMoved(false);
    };

    return (
        <>
            <Dialog open={open} fullWidth maxWidth="xl">
                <Button onClick={handleCancel} css={styles.closeButton}>
                    <CloseIcon />
                </Button>

                <DialogTitle css={styles.title}>
                    <span css={styles.titleText}>
                        変更したい位置に移動させてください
                    </span>
                </DialogTitle>

                <MapContainer
                    center={[mapData.latitude, mapData.longitude]}
                    zoom={14}
                    scrollWheelZoom
                    zoomControl={false}
                    centerUpdate
                    css={styles.mapContainer}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        position={[mapData.latitude, mapData.longitude]}
                        icon={baseIcon}
                    >
                        <Tooltip direction="top" permanent>
                            変更前
                        </Tooltip>
                    </Marker>
                    <Marker
                        position={markerPosition}
                        icon={
                            //進捗度に応じて、ピンの色を変更
                            mapData.progress === 100
                                ? CompleteIcon
                                : mapData.progress === 0 &&
                                  beforeOneMonth > date
                                ? alertIcon
                                : IncompleteIcon
                        }
                        ref={markerRef}
                        draggable="true"
                        eventHandlers={eventHandlers}
                    >
                        <Tooltip direction="top" permanent>
                            <div
                            // css={styles.tooltipContainer}
                            >
                                緯度:{markerPosition.lat}
                                <br />
                                経度:{markerPosition.lng}
                            </div>
                        </Tooltip>
                    </Marker>
                </MapContainer>
                <Button
                    variant="contained"
                    onClick={handleClick}
                    css={styles.button}
                >
                    決定
                </Button>
            </Dialog>
        </>
    );
};

const styles = {
    title: css`
        text-align: center;
        padding: 0;
    `,
    titleText: css`
        font-size: 35px;
        font-weight: bold;
    `,
    mapContainer: css`
        width: 90%;
        height: 70vh;
        margin: 0 auto;
    `,
    button: css`
        margin: 1vh auto;
        width: 30%;
    `,
    closeButton: css`
        margin: 0 0 0 auto;
    `,
};

export default MoveDialog;
