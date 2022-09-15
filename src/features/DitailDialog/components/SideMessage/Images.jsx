import React from "react";

import { css } from "@emotion/react";

import ImageDialog from "./ImageDialog";

//ToDo 処理にコメントを書く
const Images = ({ images }) => {
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
        height: 55.5vh;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        overflow: auto;
        border: 1px solid black;
    `,
};
