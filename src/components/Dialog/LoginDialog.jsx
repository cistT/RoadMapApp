import { useState, useEffect } from "react";

//import { auth } from "../../firebase";

import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import BackButton from "../ui/button/BackButton";
import InputForm from "../ui/form/InputForm";

const LoginDialog = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [isLogin, setIsLogin] = useState(false);

    const login = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        // auth.signInWithEmailAndPassword(email.value, password.value);
        // auth.onAuthStateChanged((user) => {
        //     if (user) {
        //         setIsLogin(true);
        //         window.alert("ログインしました");
        //         handleClose();
        //     }
        // });
    };

    const logout = () => {
        //auth.signOut();
        setIsLogin(false);
    };

    useEffect(() => {
        // auth.onAuthStateChanged((user) => {
        //     if (user) {
        //         setIsLogin(true);
        //     }
        // });
    }, []);

    return (
        <>
            {isLogin ? (
                <Button
                    onClick={logout}
                    style={{ textAngle: "center", color: "white" }}
                >
                    ログアウト
                </Button>
            ) : (
                <Button
                    onClick={handleClickOpen}
                    style={{ textAngle: "center", color: "white" }}
                >
                    ログイン
                </Button>
            )}

            <Dialog open={open} onClose={handleClose} maxWidth="xl">
                <DialogTitle>ログインする</DialogTitle>

                <DialogContent
                    style={{ display: "flex", whiteSpace: "pre-line" }}
                >
                    <form onSubmit={login}>
                        <InputForm label="メールアドレス" type="email" />
                        <InputForm label="パスワード" type="password" />
                        <input
                            type="submit"
                            style={{ height: "30px", width: "60px" }}
                        />
                    </form>
                </DialogContent>

                <DialogActions>
                    <BackButton onClick={handleClose} />
                </DialogActions>
            </Dialog>
        </>
    );
};

export default LoginDialog;
