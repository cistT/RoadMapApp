import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const SerchMenuBar=({
    menu,
    selectMenu
})=>{
    const handleChange = (event, newValue) => {
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
                <Tab label="入力" />
                <Tab label="詳細" />
            </Tabs>
        </>
    )
}

export default SerchMenuBar;