import CloseButton from "components/Button/CloseButton";
import OpenButton from "components/Button/OpenButton";
import { useState } from "react";
import CompleteList from "./components/Complete/CompleteList";
import MapList from "./components/Incomplete/MapList";
import MenuBar from "./components/MenuBar";
import SearchMenu from "./components/SearchMenu/SearchMenu";

const SideMenu = ({
    mapData,
    archivedMapData,
    saveDisplayMapIcons,
    dbMessages,
}) => {
    const [menu, setMenu] = useState(0);

    //検索した際に除去されたアイコンが
    //一覧ボタンを押したら元に戻るような処理
    //正常に動作はしているが、変数名や仕組みは要検討
    const resetMapIcon = () => {
        saveDisplayMapIcons(mapData);
    };

    const archivedMapIcon = () => {
        saveDisplayMapIcons(archivedMapData);
    };

    const selectMenu = (i) => {
        if (i === 0) {
            resetMapIcon();
        } else if (i === 1) {
            archivedMapIcon();
        } else if (i === 2) {
            resetMapIcon();
        }
        setMenu(i);
    };

    const [sideMenu, setSideMenu] = useState(true);

    //適切な変数名がわからない
    //ボタンをクリックしたら、サイドメニューが開閉できるような関数
    const clickSideMenu = () => setSideMenu(!sideMenu);

    return (
        <>
            {sideMenu ? (
                <div style={{ width: "40vw", height: "70vh" }}>
                    <CloseButton
                        title="サイドメニューを閉じる"
                        onClick={clickSideMenu}
                    />
                    <MenuBar menu={menu} selectMenu={selectMenu} />

                    {menu === 0 && (
                        <MapList mapData={mapData} dbMessages={dbMessages} />
                    )}
                    {menu === 1 && (
                        <CompleteList
                            archivedMapData={archivedMapData}
                            dbMessages={dbMessages}
                        />
                    )}
                    {menu === 2 && (
                        <SearchMenu
                            mapData={mapData}
                            saveDisplayMapIcons={saveDisplayMapIcons}
                            dbMessages={dbMessages}
                        />
                    )}
                </div>
            ) : (
                <OpenButton
                    title="サイドメニューを開く"
                    onClick={clickSideMenu}
                />
            )}
        </>
    );
};

export default SideMenu;
