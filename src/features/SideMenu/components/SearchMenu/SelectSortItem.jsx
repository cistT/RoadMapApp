import React, { useState } from "react";

import { Button, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import { css } from "@emotion/react";

import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const SelectSortItem = ({ setSortItem }) => {
    const defaultItem = { displayName: "選ぶ" };
    const sortItems = [
        { id: 0, itemName: "timestamp", displayName: "受付日" },
        { id: 1, itemName: "progress", displayName: "進捗度" },
        { id: 2, itemName: "id", displayName: "苦情番号" },
        { id: 3, itemName: "scheduled", displayName: "予定日" },
    ];

    const [selectedItem, setSelectedItem] = useState(defaultItem);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (id) => {
        const newItem = sortItems.find((item) => item.id === id);
        setSelectedItem(newItem);
        setSortItem(newItem.itemName);
        handleClose();
    };

    return (
        <>
        <Tooltip title="ソートする項目を選択" placement="right">
            <Button
                startIcon={<SortIcon />}
                variant="outlined"
                css={styles.button}
                onClick={handleOpen}
            >
                <span css={styles.selectedItem}>
                    {selectedItem.displayName}
                </span>
            </Button>
            </Tooltip>
            <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
                {sortItems.map((item) => (
                    <MenuItem
                        onClick={() => handleClick(item.id)}
                        key={item.id}
                    >
                        <ListItemIcon>
                            {item.id === selectedItem?.id ? (
                                <RadioButtonCheckedIcon />
                            ) : (
                                <RadioButtonUncheckedIcon />
                            )}
                        </ListItemIcon>
                        {item.displayName}
                    </MenuItem>
                ))}
            </Menu>
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
    dialogContainer: css`
        width: 10%;
        height: 50%;
    `,
};

export default SelectSortItem;
