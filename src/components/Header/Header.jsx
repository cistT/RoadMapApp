import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@mui/material";

import UsageDialog from "./components/UsageDialog";
import ProfileDialog from "features/ProfileDialog/ProfileDialog";

import { useAuthContext } from "routes/AuthContext";
import { auth } from "config/firebase";

const Header = ({ title }) => {
    const navigate = useNavigate();
    const user = useAuthContext();

    const logout = () => {
        auth.signOut();
        navigate("/signin");
    };

    return (
        <div style={{ height: "60px", width: "90vw" }}>
            <AppBar>
                <Toolbar css={styles.container}>
                    <Typography variant="h5">{title}</Typography>

                    {user && (
                        <div css={styles.buttonContainer}>
                            <ProfileDialog />

                            <Button css={styles.button} onClick={logout}>
                                ログアウト
                            </Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;

const styles = {
    container: css`
        display: flex;
        justify-content: space-between;
    `,
    buttonContainer: css`
        display: grid;
        grid-template-columns: 110px 110px 110px;
    `,
    button: css`
        color: white;
    `,
};
