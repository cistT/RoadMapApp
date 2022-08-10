import { useState } from "react";

import firebase from "firebase/compat/app";
import { db } from "../../../../config/firebase.js";

import { css } from "@emotion/react";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import { Tooltip } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

const SendMessage = ({ mapDataId }) => {
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState(" ");

    const sendMessage = (e) => {
        e.preventDefault();
        if (message === "") return;
        db.collection("messages").add({
            id: mapDataId,
            message: message,
            time: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setMessage("");
        setSuccessMessage("送信成功しました");
    };

    return (
        <>
            <Paper
                component="form"
                sx={{
                    p: "2px 4px",
                    marginTop: "10px",
                    width: "40vw",
                }}
                onSubmit={sendMessage}
            >
                <div css={styles.container}>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="メッセージの送信"
                        inputProps={{ "aria-label": "メッセージの送信" }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <div style={{ display: "flex" }}>
                        <Divider
                            sx={{ height: 40, m: 0.5 }}
                            orientation="vertical"
                        />
                        <Tooltip title="メッセージを送信する">
                            <IconButton type="submit" css={styles.icon}>
                                <SendIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </Paper>
            <p css={styles.successMessage}>{successMessage}</p>
        </>
    );
};

export default SendMessage;

const styles = {
    paper: css`
        padding: 2px 4px;
        margin-top: 10px;
        width: 40vw;
    `,
    container: css`
        display: flex;
        max-height: 50px;
        width: 40vw;
        justify-content: space-between;
    `,
    icon: css`
        height: 40px;
        width: 40px;
        margin: 5px;
    `,
    successMessage: css`
        font-size: 15px;
        margin-left: 100px;
    `,
};
