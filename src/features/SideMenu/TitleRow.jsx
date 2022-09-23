import React from "react";

import { css } from "@emotion/react";
import { Button, Tooltip } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const TitleRow = ({ isAsc, setIsAsc }) => {
    const handleClick = () => {
        setIsAsc(!isAsc);
    };
    return (
        <div css={styles.container}>
            <div css={styles.box}>
                <span>苦情番号</span>
                <span>苦情箇所の名称</span>
                <span>情報提供者</span>
            </div>
            <Tooltip title="昇順・降順を入れ替える" placement="right">
                <Button onClick={handleClick}>
                    <SwapVertIcon />
                </Button>
            </Tooltip>
        </div>
    );
};

const styles = {
    container: css`
        border-bottom: 1px solid #cecece;
        display: flex;
    `,
    box: css`
        margin-top: 10px;
        display: flex;
        width: 85%;
        justify-content: space-between;
        font-size: 11px;
    `,
};

export default TitleRow;
