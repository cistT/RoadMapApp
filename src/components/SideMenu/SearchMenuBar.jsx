import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const SearchMenuBar=({
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
            <Tab  label="検索" />
            <Tab label="検索結果" />
        </Tabs>
    </>
    )
}

export default SearchMenuBar;