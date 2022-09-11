import { NotificationsOffOutlined } from "@material-ui/icons";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import { css } from "@emotion/react";

const ProgressButtons = ({ saveProgress, mapData }) => {
    const buttons = [
        { label: "現地確認", value: 33 },
        { label: "指示", value: 66 },
        { label: "実施済み", value: 100 },
    ];

    return (
        <>
            <Typography gutterBottom></Typography>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {buttons.map((button) => (
                    <Button
                        onClick={() => saveProgress(mapData.id, button.value)}
                        variant="outlined"
                        css={(mapData?.progress === button.value) ? styles.blueButton : styles.whiteButton}
                        key={button.label}
                    >
                        {button.label}
                    </Button>
                ))}
            </div>
        </>
    );
};

const styles = {
    blueButton: css`
        height: 30px;
        width: 110px;
        margin: 5px;
        background: blue;
        color: white;
    `,
    whiteButton: css`
        height: 30px;
        width: 110px;
        margin: 5px;
        color: blue;
    `,
};

export default ProgressButtons;
