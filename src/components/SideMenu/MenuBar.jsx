import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ViewListIcon from '@mui/icons-material/ViewList';
import SearchIcon from '@mui/icons-material/Search';
import ArchiveIcon from '@mui/icons-material/Archive';

const MunuBar=({
    menu,
    selectMenu,
    resetMapIcon,
    archivedMapIcon
})=>{

    const handleChange = (_, newValue) => {
        selectMenu(newValue);
        if(newValue===0){
            resetMapIcon();
        }else if(newValue===1){
            resetMapIcon();
        }else if(newValue===2){
            archivedMapIcon();
        }
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