import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const ProgressButtons = ({ saveProgress, mapData }) => {
    const buttons = [
        { label: "現地確認", value:25  },
        { label: "連絡済", value: 50 },
        { label: "予定確認済", value:75  },
        { label: "完了", value: 100 },
    ];

    return (
        <>
            <Typography gutterBottom></Typography>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {buttons.map((button) => (
                    <Button
                        onClick={() => saveProgress(mapData.id, button.value)}
                        variant="outlined"
                        style={{
                            height: "40px",
                            width: "110px",
                            margin: "5px",
                            background:
                                mapData?.progress === button.value && "blue",
                            color:
                                mapData?.progress === button.value
                                    ? "white"
                                    : "blue",
                        }}
                        key={button.label}
                    >
                        {button.label}
                    </Button>
                ))}
            </div>
        </>
    );
};

export default ProgressButtons;
