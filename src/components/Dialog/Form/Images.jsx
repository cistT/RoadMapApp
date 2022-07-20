import React from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import ImageDialog from "./ImageDialog";
import { css } from "@emotion/react";
import useFetchImages from "../../../hooks/useFetchImages";
import { List } from "@material-ui/core";

//ToDo ブラウザ上のカメラで撮影した写真を取得する処理を記述する

const Images = ({ mapDataId, imgUrl, images }) => {
    return (
        <>
            <div css={styles.container}>
                {[
                    ...new Set(
                        [...images]
                            .sort((prev, curr) => prev.time - curr.time)
                            .map((img) => img.url)
                    ),
                ].map((img, i, images) => (
                    <ImageDialog
                        key={`${img}${i}`}
                        imgUrl={img}
                        images={images}
                        index={i}
                    />
                )) || <div>少々お待ちください</div>}
            </div>
        </>
    );
};

export default Images;

const styles = {
    container: css`
        height: 400px;
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        overflow: auto;
        border: 1px solid black;
    `,
};
