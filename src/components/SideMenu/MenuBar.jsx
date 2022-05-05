import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ViewListIcon from '@mui/icons-material/ViewList';
import SearchIcon from '@mui/icons-material/Search';
import ArchiveIcon from '@mui/icons-material/Archive';

const MunuBar=({
    menu,
    selectMenu
})=>{

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
            style={{margin:"5px"}}
        >
            <Tab icon={<ViewListIcon />} label="一覧" />
            <Tab icon={<SearchIcon />} label="検索" />
            <Tab icon={<ArchiveIcon />} label="アーカイブ" />
        </Tabs>
    </>
    )
}

export default MunuBar;