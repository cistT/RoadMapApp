import * as React from "react";

import { css } from "@emotion/react";

import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import MailIcon from "@mui/icons-material/Mail";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

const GroupOrientation = ({ menu, selectMenu }) => {
    const buttons = [
        <Tooltip title="メッセージを見る" key="one">
            <Button
                css={styles.button(menu === 0)}
                onClick={() => selectMenu(0)}
            >
                <MailIcon />
            </Button>
        </Tooltip>,
        <Tooltip title="写真を見る" key="two">
            <Button
                css={styles.button(menu === 1)}
                onClick={() => selectMenu(1)}
            >
                <InsertPhotoIcon />
            </Button>
        </Tooltip>,
        // <Button key="three" css={styles.button} onClick={() => selectMenu(2)}>
        //     <InsertDriveFileIcon />
        // </Button>,
    ];
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
            }}
        >
            <ButtonGroup
                orientation="vertical"
                size="large"
                aria-label="large button group"
            >
                {buttons}
            </ButtonGroup>
        </Box>
    );
};
export default GroupOrientation;

const styles = {
    button: (bgColor = false) => css`
        height: 200px;
        background-color: ${bgColor ? "rgba(221, 246, 255, 0.2)" : "white"};
    `,
};
