import CloseButton from "components/Button/CloseButton";
import OpenButton from "components/Button/OpenButton";
import { useState } from "react";
import MenuBar from "./components/MenuBar";
import Incomplete from "./components/Incomplete";
import Complete from "./components/Complete";
import All from "./components/All";

const SideMenu = ({
    mapData,
    allData,
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

    const allMapIcon = () => {
        saveDisplayMapIcons(allData);
    };

    const selectMenu = (i) => {
        if (i === 0) {
            resetMapIcon();
        } else if (i === 1) {
            archivedMapIcon();
        } else if (i === 2) {
            allMapIcon();
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
                        <Incomplete
                            mapData={mapData}
                            dbMessages={dbMessages}
                            saveDisplayMapIcons={saveDisplayMapIcons}
                        />
                    )}
                    {menu === 1 && (
                        <Complete
                            archivedMapData={archivedMapData}
                            dbMessages={dbMessages}
                            saveDisplayMapIcons={saveDisplayMapIcons}
                        />
                    )}
                    {menu === 2 && (
                        <All
                            allMapData={allData}
                            dbMessages={dbMessages}
                            saveDisplayMapIcons={saveDisplayMapIcons}
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
