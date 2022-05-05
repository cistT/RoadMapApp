import { useState } from "react";

import MapList from "./SideMenu/MapList";
import SerchMenu from "./SideMenu/SerchMenu";
import MenuBar from "./SideMenu/MenuBar";
import ArchiveList from "./Archive/ArchiveList";


const SideMenu=({
    mapData,
    updateMapData,
    archivedMapData,
    archiveMapData
})=>{
  
    const [menu,setMenu]=useState(0);
    const selectMenu=(i)=>setMenu(i);
    return (
        <div style={{width:'40vw',height:'70vh'}}>
            <MenuBar
                menu={menu}
                selectMenu={selectMenu}
            />
            {
                menu===0&&(
                    <MapList
                        mapData={mapData}
                        updateMapData={updateMapData}
                        archiveMapData={archiveMapData}
                    />
                )
            }
            {
                menu===1&&(
                    <SerchMenu
                        mapData={mapData}
                        updateMapData={updateMapData}
                        archiveMapData={archiveMapData}
                    />
                )
            }
            {menu===2&&(
                <ArchiveList archivedMapData={archivedMapData} />
            )}
        </div>
    )
}

export default SideMenu;