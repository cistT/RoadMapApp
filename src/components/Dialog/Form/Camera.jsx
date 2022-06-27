import { Button } from "@mui/material";
import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

const Camera = () => {
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
    }, [webcamRef]);

    return (
        <div>
            {isShooting ? (
                <>
                    <div>
                        <Button onClick={handleFinishShooting}>撮影終了</Button>
                    </div>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat={"image/jpeg"}
                        videoConstraints={{
                            width: "100px",
                            height: "50px",
                            facingMode: "user",
                        }}
                    />
                    <Button onClick={capture}>撮影！！！！</Button>
                </>
            ) : (
                <Button onClick={handleStartShooting}> 撮影する</Button>
            )}

            {url ? (
                <>
                    <Button
                        onClick={() => {
                            setUrl(null);
                        }}
                    >
                        削除
                    </Button>
                    <img src={url} alt="Screenshot" />
                </>
            ) : (
                <></>
            )}
        </div>
    );
};
export default Camera;
