import React, { useRef, useState } from "react";

import firebase from "firebase/compat/app";
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";
import { db } from "../../../firebase.js";

import Camera from "./Camera";

const SendImage = ({ mapDataId }) => {
    const inputRef = useRef();
    const [image, setImage] = useState("");

    const saveImgUrl = (id, url) => {
        db.collection("img").add({
            mapDataId: id,
            url: url,
            time: firebase.firestore.FieldValue.serverTimestamp(),
        });
    };

    const OnFileUploadToFirebase = (e) => {
        e.preventDefault();

        const file = inputRef?.current?.files[0];

        const storage = getStorage();

        const storageRef = ref(storage, `${mapDataId}/test`);

        image && uploadString(storageRef, image).then((snapshot) => {});
        image &&
            saveImgUrl(
                mapDataId,
                `${process.env.REACT_APP_STORAGE_URL}/${mapDataId}/test`
            );

        file?.name &&
            uploadBytes(ref(storage, `${mapDataId}/${file.name}`), file).then(
                () => {}
            );
        file?.name &&
            saveImgUrl(
                mapDataId,
                `${process.env.REACT_APP_STORAGE_URL}/${mapDataId}/${file.name}`
            );
    };
    return (
        <form style={{ display: "flex" }} onSubmit={OnFileUploadToFirebase}>
            <Camera setImage={setImage} />
            <input type="file" ref={inputRef} accept=".png, .jpg, .jpeg" />
            <button type="submit">アップロード</button>
        </form>
    );
};

export default SendImage;
