import React, { useRef } from "react";

import { ref, uploadBytes } from "firebase/storage";

import { storage } from "../../../firebase";

const SendImage = () => {
    const inputRef = useRef();
    const OnFileUploadToFirebase = (e) => {
        e.preventDefault();

        const file = inputRef.current.files[0].name;

        const storageRef = ref(storage, "image/" + file);
        uploadBytes(storageRef, file).then(() => {});
    };
    return (
        <form style={{ display: "flex" }} onSubmit={OnFileUploadToFirebase}>
            <input type="file" ref={inputRef} accept=".png, .jpg, .jpeg" />
            <button type="submit">アップロード</button>
        </form>
    );
};

export default SendImage;
