import React from "react";

import { css } from "@emotion/react";

import { Button, Tooltip } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const ReverseListButton = ({ isAsc, setIsAsc }) => {
    const handleClick = () => {
        setIsAsc(!isAsc);
    };

    return (
        <Tooltip title="昇順・降順を入れ替える" placement="right">
            <Button onClick={handleClick} css={styles.button}>
                <SwapVertIcon />
            </Button>
        </Tooltip>
    );
};

const styles = {
    button: css`
        padding: 0;
    `,
};

export default ReverseListButton;
