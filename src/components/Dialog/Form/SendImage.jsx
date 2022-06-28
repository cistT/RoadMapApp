import React, { useRef } from "react";
import Camera from "./Camera";

// import { ref, uploadBytes } from "firebase/storage";

// import { storage } from "../../../firebase";

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
            <Camera ref={inputRef} />
            <input type="file" ref={inputRef} accept=".png, .jpg, .jpeg" />
            <button type="submit">アップロード</button>
        </form>
    );
};

export default SendImage;
