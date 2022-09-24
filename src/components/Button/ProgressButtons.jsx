import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import { css } from "@emotion/react";

const ProgressButtons = ({ onClick, progress = 0 }) => {
    const buttons = [
        { label: "現地確認", value: 33 },
        { label: "指示", value: 66 },
        { label: "実施済", value: 100 },
    ];
    return (
        <>
            <Typography gutterBottom></Typography>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {buttons.map((button) => (
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
                ))}
            </div>
        </>
    );
};

const styles = {
    blueButton: css`
        width: 30%;
        height: 30px;
        margin: 5px 5px 0 5px;
        background: blue;
        color: white;
        :hover {
            color: blue;
        }
    `,
    whiteButton: css`
        height: 30px;
        width: 30%;
        margin: 5px 5px 0 5px;
        color: blue;
    `,
};

export default ProgressButtons;
