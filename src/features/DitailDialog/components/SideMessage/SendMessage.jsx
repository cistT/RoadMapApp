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
import { useAuthContext } from "routes/AuthContext.jsx";

const SendMessage = ({ mapDataId }) => {
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState(" ");

    const user = useAuthContext();

    const sendMessage = (e) => {
        e.preventDefault();
        if (message === "") return;
        db.collection("messages").add({
            id: mapDataId,
            manager: user?.displayName ?? "不明",
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setMessage("");
        setSuccessMessage("送信成功しました");
    };

    return (
        <>
            <Paper
                component="form"
                css={styles.paper}
                onSubmit={sendMessage}
            >
                <div css={styles.container}>
                    <InputBase
                        css={styles.input}
                        placeholder="メッセージの送信"
                        inputProps={{ "aria-label": "メッセージの送信" }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <div style={{ display: "flex" }}>
                        <Divider
                            css={styles.divider}
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
        margin-top: 2px;
    `,
    container: css`
        display: flex;
        height: 8vh;
        width: 100%;
        justify-content: space-between;
    `,
    icon: css`
        height: 45px;
        width: 45px;
    `,
    successMessage: css`
        font-size: 15px;
        margin-left: 100px;
    `,
    input: css`
        margin-left: 1;
        padding-left: 64px;
        flex: 1;
    `,
    divider: css`
        height: 40;
        margin: 0.5;
    `
};
