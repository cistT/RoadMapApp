import React from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import { ButtonGroup, Button, Divider } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import ArchiveIcon from "@mui/icons-material/Archive";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const SideBar = ({ onClickList, onClickSearch, onClickArchive }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
                style={{ height: "60px", margin: "10px 0" }}
                onClick={onClickList}
            >
                <ViewListIcon />
            </Button>
            <Button
                style={{ height: "60px", margin: "10px 0" }}
                onClick={onClickSearch}
            >
                <SearchIcon />
            </Button>
            <Button
                style={{ height: "60px", margin: "10px 0" }}
                onClick={onClickArchive}
            >
                <ArchiveIcon />
            </Button>
            <Button style={{ height: "60px", margin: "10px 0" }}>
                <KeyboardDoubleArrowLeftIcon />
            </Button>
            <Button style={{ height: "60px", margin: "10px 0" }}>
                <KeyboardDoubleArrowRightIcon />
            </Button>
        </div>
    );
};

export default SideBar;
