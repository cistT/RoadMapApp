import React from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const useFetchImages = (url, mapDataId) => {
    const [imgs, setImgs] = React.useState([]);
    const storage = getStorage();

    const fetchImage = async (image) => {
        const gsReference = ref(storage, image.url);
        const imgUrl = await getDownloadURL(gsReference);
        setImgs((img) => [
            ...img,
            { url: imgUrl, time: image?.time?.seconds ?? 1e15 },
        ]);
    };
    React.useEffect(() => {
        url?.filter((image) => image.mapDataId === mapDataId).forEach((image) =>
            fetchImage(image)
        );
    }, [url]);

    return [imgs, setImgs];
};

export default useFetchImages;
