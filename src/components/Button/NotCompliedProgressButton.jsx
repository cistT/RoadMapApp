import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import { css } from "@emotion/react";

const NotCompliedProgressButton = ({ onClick, progress = -100 }) => {
    const button = { label: "未実施", value: 100 };

    return (
        <>
            <Typography gutterBottom></Typography>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div css={styles.nullButton} />
                <div css={styles.nullButton} />
                <Button
                    onClick={() => onClick(button.value, button.label)}
                    variant="outlined"
                    css={
                        progress === button.value
                            ? styles.blueButton
                            : styles.whiteButton
                    }
                    key={button.label}
                >
                    {button.label}
                </Button>
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
        :hover {
            color: blue;
        }
    `,
    whiteButton: css`
        height: 30px;
        width: 110px;
        margin: 5px;
        color: blue;
    `,
    nullButton: css`
        height: 30px;
        width: 110px;
        margin: 5px;
        background: white;
        color: white;
    `,
};

export default NotCompliedProgressButton;
