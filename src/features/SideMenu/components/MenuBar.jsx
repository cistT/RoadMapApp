import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ViewListIcon from "@mui/icons-material/ViewList";
import SearchIcon from "@mui/icons-material/Search";
import ArchiveIcon from "@mui/icons-material/Archive";
import AutoAwesomeMotionTwoToneIcon from '@mui/icons-material/AutoAwesomeMotionTwoTone';

const MenuBar = ({ menu, selectMenu }) => {
    const handleChange = (_, newValue) => {
        selectMenu(newValue);
    };

    return (
        <>
            <Tabs
                value={menu}
                onChange={handleChange}
                aria-label="icon label tabs example"
                centered
                style={{ margin: "5px" }}
            >
                <Tab icon={<ViewListIcon />} label="未完了" />
                <Tab icon={<ArchiveIcon />} label="完了" />
                <Tab icon={<AutoAwesomeMotionTwoToneIcon />} label="全件表示" />
            </Tabs>
        </>
    );
};

export default MenuBar;
