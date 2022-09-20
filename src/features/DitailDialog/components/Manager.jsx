import React, { useState, useContext } from "react";

import { css } from "@emotion/react";

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import { ChangeManager } from "page/Home";

import usePostGAS from "hooks/usePostGAS";

const Manager = ({ id, manager = "未定" }) => {
    const { postData } = usePostGAS();
    const changeManager = useContext(ChangeManager);

    const [value, setValue] = useState(manager);
    const onChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    };

    const onClick = () => {
        if (value) {
            changeManager(id, value);
            postData({
                id: id,
                manager: value,
            });
        }
    };

    return (
        <div css={styles.container}>
            <TextField
                label="担当者"
                maxRows={1}
                onChange={onChange}
                value={value}
                sx={{ width: "20ch" }}
            />

            <Button onClick={onClick}>変更</Button>
            {/* 保存されたことを示す言葉を表示する必要がある */}
        </div>
    );
};

export default Manager;

const styles = {
    container: css`
        display: flex;
    `,
};
