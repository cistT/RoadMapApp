import React from "react";
import { css } from "@emotion/react";

const TextWithTitle = ({ title, text = "" }) => {
    return (
        <><div css={styleflame}>
            <div css={styletitle}>{title}</div>
            <div css={styletext}>{text}</div>
            </div>
        </>
    );
};

const styleflame = css`
    width: 35vw;
    border: 0.5px dashed black;
    margin: 10px;
    padding: 5px;`
;
const styletitle = css`
    font-size: 12px;
    color: black;
    font-weight: normal;
    marginbottom: 5px;
`;
const styletext = css`
    width: 80% ;
    padding : 0 0 0 12px ;
    font-size: 20px;
    color: black;
    font-weight: bold;
`;

export default TextWithTitle;
