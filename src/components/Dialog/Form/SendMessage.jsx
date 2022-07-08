import { useState } from "react";
import { db } from "../../../firebase.js";
import firebase from "firebase/compat/app";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

const SendMessage = ({ mapDataId }) => {
    const [message, setMessage] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        if (message === "") return;
        db.collection("messages").add({
            id: mapDataId,
            message: message,
            time: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setMessage("");
    };

    return (
        <>
            <Paper
                component="form"
                sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "40vw",
                }}
                onSubmit={sendMessage}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="メッセージの送信"
                    inputProps={{ "aria-label": "メッセージの送信" }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton type="submit">
                    <SendIcon />
                </IconButton>
            </Paper>
        </>
    );
};

export default SendMessage;
