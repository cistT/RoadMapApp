import React from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

//ToDo ブラウザ上のカメラで撮影した写真を取得する処理を記述する

const Images = ({ mapDataId, imgUrl }) => {
    const [imgs, setImgs] = React.useState([]);

    const storage = getStorage();

    const fetchImage = async (fetchUrl) => {
        const gsReference = ref(storage, fetchUrl);
        const url = await getDownloadURL(gsReference);
        console.log(url);
        setImgs((img) => [...img, url]);
    };
    React.useEffect(() => {
        setImgs([]);
        imgUrl
            .filter((image) => image.mapDataId === mapDataId)
            .forEach((image) => fetchImage(image.url));
        console.log(imgUrl);
    }, [imgUrl]);
    return (
        <>
            {imgs.map((img, i) => (
                <img src={img} key={`${img}${i}`} alt="" />
            )) || <div>少々お待ちください</div>}
        </>
    );
};

export default Images;
