import { Button } from "@mui/material";
import React from "react";

const UsageButton = ({ onClick }) => {
    return (
        <Button onClick={onClick} style={{ width: "60px", color: "white" }}>
            使い方
        </Button>
    );
};

export default UsageButton;
