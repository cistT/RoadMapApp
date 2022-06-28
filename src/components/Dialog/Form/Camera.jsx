import { Button } from "@mui/material";
import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import IconButton from "@mui/material/IconButton";
import { PhotoCamera } from "@material-ui/icons";
import {
    ArrowBackIosNew,
    RadioButtonChecked,
    DeleteForever,
} from "@mui/icons-material";

const Camera = ({ ref }) => {
    const webcamRef = useRef(null);
    const [isShooting, setIsShooting] = useState(false);
    const [url, setUrl] = useState("");

    const handleStartShooting = () => {
        setIsShooting(true);
    };

    const handleFinishShooting = () => {
        setIsShooting(false);
    };

    const capture = useCallback(() => {
        const imgSrc = webcamRef.current?.getScreenshot();
        if (imgSrc) {
            setUrl(imgSrc);
        }
    }, [ref]);

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            {isShooting ? (
                <>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <IconButton onClick={handleFinishShooting}>
                            <ArrowBackIosNew />
                        </IconButton>
                        <IconButton onClick={capture}>
                            <RadioButtonChecked />
                        </IconButton>
                        {url && (
                            <IconButton
                                onClick={() => {
                                    setUrl(null);
                                }}
                            >
                                <DeleteForever />
                            </IconButton>
                        )}
                    </div>
                    {!(url) && (
                        <Webcam
                            audio={false}
                            width={"200px"}
                            height={"150px"}
                            ref={webcamRef}
                            screenshotFormat={"image/jpeg"}
                            videoConstraints={{
                                width: "200px",
                                height: "150px",
                                facingMode: "user",
                            }}
                        />
                    )}
                </>
            ) : (
                <IconButton onClick={handleStartShooting}>
                    <PhotoCamera />
                </IconButton>
            )}
            {url && (
                <img
                    src={url}
                    alt="Screenshot"
                    style={{ width: "200px", height: "150px" }}
                />
            )}
        </div>
    );
};
export default Camera;
