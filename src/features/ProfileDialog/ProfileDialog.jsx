import React from "react";

import { css } from "@emotion/react";

import { Button, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import InputForm from "components/Form/InputForm";

import { useAuthContext } from "routes/AuthContext";
import useDialog from "hooks/useDialog";

const ProfileDialog = () => {
    const { open, handleOpen, handleClose } = useDialog(false);

    const user = useAuthContext();

    const [displayName, setDisplayName] = React.useState(user?.displayName);

    const inputRef = React.useRef();

    const changeDisplayName = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;
        const displayName = inputRef.current.value;
        user?.updateProfile({
            displayName,
        }).then(() => {
            setDisplayName(displayName);
            inputRef.current.value = "";
        });
    };
    return (
        <>
            {user && (
                <Button css={styles.button} onClick={handleOpen}>
                    プロフィール
                </Button>
            )}

            <Dialog open={open} onClose={handleClose} maxWidth="xl">
                <DialogTitle>プロフィール変更</DialogTitle>

                <DialogContent>
                    <h2>現在のユーザ名</h2>
                    <p>{displayName}</p>

                    <form onSubmit={changeDisplayName}>
                        <InputForm label="変更後のユーザ名" ref={inputRef} />

                        <Button
                            type="submit"
                            variant="outlined"
                            css={styles.inputButton}
                        >
                            変更
                        </Button>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>閉じる</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ProfileDialog;

const styles = {
    button: css`
        color: white;
    `,
    inputButton: css`
        height: 40px;
        margin-left: 10px;
    `,
};
