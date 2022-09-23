import React from "react";

import { Button } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import { css } from "@emotion/react";

const SelectSortItem = () => {
    return (
        <>
            <Button
                startIcon={<SortIcon />}
                variant="outlined"
                css={styles.button}
            >
                <span css={styles.selectedItem}>項目名あ</span>
            </Button>
        </>
    );
};

const styles = {
    button: css`
        height: 40%;
        width: 100%;
        margin-top: 2.5%;
    `,
    selectedItem: css`
        font-size: 5px;
    `,
};

export default SelectSortItem;
