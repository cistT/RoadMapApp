import React, { useState } from "react";

import { Button, Menu, MenuItem, ListItemIcon, Tooltip } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { css } from "@emotion/react";

import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const SelectSearchItem = ({ setSearchItem }) => {
    const defaultName = { displayName: "選ぶ" };
    const searchItems = [
        { id: 0, itemName: "respondent_name", displayName: "情報提供者" },
        { id: 1, itemName: "manager", displayName: "担当者" },
        { id: 2, itemName: "address", displayName: "住所" },
    ];

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedItem, setSelectedItem] = useState(defaultName);

    const open = Boolean(anchorEl);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (id) => {
        const newItem = searchItems.find((item) => item.id === id);
        setSelectedItem(newItem);
        setSearchItem(newItem.itemName);
        handleClose();
    };

    return (
        <>
            <Tooltip title="検索する項目を選択" placement="right">
                <Button
                    startIcon={<ManageSearchIcon />}
                    variant="outlined"
                    css={styles.button}
                    onClick={handleOpen}
                >
                    <span css={styles.selectedItem}>
                        {selectedItem?.displayName}
                    </span>
                </Button>
            </Tooltip>
            <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
                {searchItems.map((item) => (
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
        width: 100%;
        height: 40%;
    `,
    selectedItem: css`
        font-size: 5px;
    `,
    dialogContainer: css`
        width: 10%;
        height: 50%;
    `,
};

export default SelectSearchItem;
