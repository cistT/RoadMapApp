import React, { useRef } from "react";

// import { ref, uploadBytes } from "firebase/storage";

// import { storage } from "../../../firebase";

import Camera from "./Camera.jsx"

const SendImage = () => {
    const inputRef = useRef();

    const OnFileUploadToFirebase = (e) => {
        e.preventDefault();

        const file = inputRef.current.files[0];

        // const storageRef = ref(storage, "image/" + file.name);

        // uploadBytes(storageRef, file).then(() => {});
    };
    return (
        <form style={{ display: "flex" }} onSubmit={OnFileUploadToFirebase}>
            <input type="file" ref={inputRef} accept=".png, .jpg, .jpeg" />
            {/* 写真を撮るボタン */}
            <Camera/>
            <button type="submit">アップロード</button>
        </form>
    );
};

export default SendImage;
