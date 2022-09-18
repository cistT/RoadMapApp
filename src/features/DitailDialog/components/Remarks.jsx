import React from "react";

import { css } from "@emotion/react";

import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import SaveAsIcon from "@mui/icons-material/SaveAs";

import Tooltip from "@mui/material/Tooltip";

const Remarks = ({ value }) => {
    const [remarksValue, setRemarksValue] = useState("");

    const [isChanged, setIsChanged] = useState(false);

    // 最初にpropsをstateに格納
    useEffect(() => {
        setRemarksValue(value);
    }, []);

    const handleSubmit = () => {
        console.log("送信！");
        setIsChanged(true);
        // remarksValueをgasのapiへのデータの送信処理を書く
    };

    const handleChange = (e) => {
        const newValue = e.target.value;
        setRemarksValue(newValue);
    };

    return (
        <div css={styles.container}>
            <TextField
                name="remarks"
                label="備考欄"
                css={styles.remarks}
                placeholder={"備考があれば入力してください"}
                value={remarksValue}
                id="filled-multiline-flexible"
                multiline
                maxRows={15}
                variant="outlined"
                onChange={(e) => handleChange(e)}
            />
            <div css={styles.buttonContainer}>
                <Tooltip title="保存" placement="top">
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        css={styles.button}
                    >
                        <SaveAsIcon />
                    </Button>
                </Tooltip>
                <div>
                    {isChanged ? (
                        <span css={styles.saved}>保存済</span>
                    ) : (
                        <span css={styles.unSaved}>未保存</span>
                    )}
                </div>
            </div>
        </div>
    );
};

const styles = {
    button: css`
        //     margin-left: 10px;
        //     padding-left: 10px;
        //     margin-top: 2px;
    `,
    remarks: css`
        width: 36vw;
        margin-top: 5px;
    `,
    saved: css`
        color: blue;
    `,
    unSaved: css`
        color: black;
    `,
    container: css`
        display: flex;
    `,
    buttonContainer: css`
        text-align: center;
        margin-left: 10px;
    `,
};

export default Remarks;
