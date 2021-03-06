import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LoginDialog from "../../Dialog/LoginDialog";

import UsageDialog from "../../Dialog/UsageDialog";

// Todo : ログアウトボタンつけよう

const NavBar = ({ title }) => {
    return (
        <div style={{ height: "60px", width: "90vw" }}>
            <AppBar>
                <Toolbar
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Typography variant="h5">{title}</Typography>
                    <div>
                        <UsageDialog />
                        {/* <LoginDialog /> */}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
