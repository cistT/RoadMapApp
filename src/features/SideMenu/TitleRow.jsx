import React from "react";

import { css } from "@emotion/react";
import { Button, Tooltip } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const TitleRow = () => {
    return (
        <div css={styles.container}>
            <span>苦情番号</span>
            <span>苦情箇所の名称</span>
            <span>情報提供者</span>
        </div>
    );
};

const styles = {
    container: css`
        margin-top: 10px;
        display: flex;
        width: 85%;
        justify-content: space-between;
        font-size: 11px;
    `,
};

export default TitleRow;
