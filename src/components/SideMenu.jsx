import { useState } from "react";

import OpenButton from "./Button/OpenButton";
import MenuBar from "./SideMenu/MenuBar";
import MapList from "./SideMenu/MapList";
import SerchMenu from "./SideMenu/SearchMenu";
import ArchiveList from "./Archive/ArchiveList";
import CloseButton from "./Button/CloseButton"


const SideMenu=({
    mapData,
    archivedMapData,
    saveDisplayMapIcons,
})=>{
    const [menu,setMenu]=useState(0);
    const selectMenu=(i)=>setMenu(i);

    const [sideMenu,setSideMenu]=useState(true);

    //適切な変数名がわからない
    //ボタンをクリックしたら、サイドメニューが開閉できるような関数
    const clickSideMenu=()=>setSideMenu(!sideMenu);

    //検索した際に除去されたアイコンが
    //一覧ボタンを押したら元に戻るような処理
    //正常に動作はしているが、変数名や仕組みは要検討
    const resetMapIcon=()=>{
        saveDisplayMapIcons(mapData);
    }

    const archivedMapIcon=()=>{
        saveDisplayMapIcons(archivedMapData);
    }
    return (
        <>
            {
                sideMenu?(
                    <div style={{width:'60%',height:'70vh'}}>
                        <CloseButton
                            title="サイドメニューを閉じる"
                            onClick={clickSideMenu}
                        />

                        <MenuBar
                            menu={menu}
                            selectMenu={selectMenu}
                            resetMapIcon={resetMapIcon}
                            archivedMapIcon={archivedMapIcon}
                        />
                        {
                            menu===0&&(
                                <MapList
                                    mapData={mapData}
                                />
                            )
                        }
                        {
                            menu===1&&(
                                <SerchMenu
                                    mapData={mapData}
                                    saveDisplayMapIcons={saveDisplayMapIcons}
                                />
                            )
                        }
                        {
                            menu===2&&(
                                <ArchiveList archivedMapData={archivedMapData} />
                            )
                        }
                    </div>
                ):(
                <OpenButton
                    title="サイドメニューを開く"
                    onClick={clickSideMenu}
                />
                )
            }
        </>
    )
}

export default SideMenu;