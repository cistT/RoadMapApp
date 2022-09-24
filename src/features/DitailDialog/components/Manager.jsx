import React, { useState, useContext } from "react";

import { css } from "@emotion/react";

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import SaveAsIcon from "@mui/icons-material/SaveAs";

import Tooltip from "@mui/material/Tooltip";

import { ChangeManager } from "page/Home";

import usePostGAS from "hooks/usePostGAS";

const Manager = ({ id, manager = "未定" }) => {
    const { postData } = usePostGAS();
    const changeManager = useContext(ChangeManager);

    const [value, setValue] = useState(manager);
    const [saved, setSaved] = useState(false);
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
        setSaved(true);
    };

    return (
        <div css={styles.container}>
            <TextField
                label="担当者"
                placeholder={"担当者を入力してください"}
                rows={1}
                maxRows={1}
                onChange={onChange}
                value={value}
                variant="outlined"
                css={styles.field}
                margin="dense"
                multiline
                InputProps={{ style: { height: "60px", fontSize: "24px" } }}
            />
            <div css={styles.buttonContainer}>
                <Tooltip title="保存" placement="top">
                    <Button variant="contained" onClick={onClick}>
                        <SaveAsIcon />
                    </Button>
                </Tooltip>
                <div>
                    {saved ? (
                        <span css={styles.saved}>保存済</span>
                    ) : (
                        <span css={styles.unSaved}>未保存</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Manager;

const styles = {
    container: css`
        display: flex;
        align-items: center;
        margin: 10px 0;
    `,
    field: css`
        display: inline;
        width: 36vw;
        height: 60px;
    `,
    buttonContainer: css`
        margin: 0 auto;
        text-align: center;
    `,
    saved: css`
        color: blue;
    `,
    unSaved: css`
        color: black;
    `,
};
