import React from "react";

import { css } from "@emotion/react";

import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import SaveAsIcon from '@mui/icons-material/SaveAs';

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
        <>
            <TextField
                name="remarks"
                css={styles.remarks}
                placeholder={"備考があれば入力してください"}
                value={remarksValue}
                id="filled-multiline-flexible"
                multiline
                maxRows={15}
                variant="outlined"
                onChange={(e) => handleChange(e)}
            />
            <Button
                variant="contained"
                onClick={handleSubmit}
                css={styles.button}
                endIcon={<SaveAsIcon/>}
            >
                保存
            </Button>

            <div css={styles.message}>
                {isChanged ? (
                    <span css={styles.saved}>保存しました</span>
                ) : (
                    <span css={styles.unSaved}>保存していません</span>
                )}
            </div>
        </>
    );
};

const styles = {
    button: css`
        margin-left: 10px;
        padding-left: 10px;
        margin-top: 2px;
    `,
    remarks: css`
      width: 36vw;
      margin-top: 5px;
    `,
    message: css`
        text-align: right;
        margin-top: 5px;
        margin-right: 8vw;
    `,
    saved: css`
        color: blue;
    `,
    unSaved: css`
        color: black;
    `,
};

export default Remarks;
