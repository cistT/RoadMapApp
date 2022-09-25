import { useState, useLayoutEffect, createContext } from "react";

import { db } from "../config/firebase";

import LoadingScreen from "./LoadingScreen";
import Header from "../components/Header/Header";
import Map from "../features/Map/Map";
import SideMenu from "../features/SideMenu/SideMenu";

//全体のソースコード
//変数名は適宜変えよう
//CSSはcss-in-jsで書き直したほうが良い
//コンポーネント設計は見直したほうが良い

export const SaveProgress = createContext();
export const SaveDisplayMapIcons = createContext();
export const ArchiveMapData = createContext();
export const RevertArchive = createContext();
export const ImageUrl = createContext();
export const ChangeManager = createContext();

const Home = () => {
    //プロップスリレーが生じていたのでuseContextで実装した

    const [load, setLoad] = useState(true);
    const [mapData, setMapData] = useState([]);

    //千歳市の緯度と経度
    const defaultPosition = {
        latitude: 42.82128669999999,
        longitude: 141.6510125,
    };

    const [displayMapIcons, setDisplayMapIcons] = useState([]);
    const saveDisplayMapIcons = (mapData) => setDisplayMapIcons(mapData);

    const [archivedMapData, setArchivedMapData] = useState([]);
    const archiveMapData = (newArchiveMapData) => {
        setArchivedMapData([...archivedMapData, newArchiveMapData]);
        saveDisplayMapIcons(
            displayMapIcons.filter((data) => data.id !== newArchiveMapData.id)
        );
        setMapData(mapData.filter((data) => data.id !== newArchiveMapData.id));
    };

    const saveProgress = (mapDataId, progress) => {
        setMapData(
            mapData.map((data) => {
                if (data.id === mapDataId) {
                    return { ...data, progress: progress };
                }
                return data;
            })
        );
        setDisplayMapIcons(
            displayMapIcons.map((data) => {
                if (data.id === mapDataId) {
                    return { ...data, progress: progress };
                }
                return data;
            })
        );
    };

    const revertArchive = (revertMapData) => {
        setArchivedMapData(
            archivedMapData.filter((data) => data.id !== revertMapData.id)
        );
        setMapData([...mapData, revertMapData]);
    };

    const [dbMessages, setDBMessages] = useState([]);
    const [imgUrl, setImgUrl] = useState([]);
    const fetchImgUrl = () => {
        db.collection("img")
            .orderBy("time")
            .limit(50)
            .onSnapshot((snapshot) => {
                setImgUrl(snapshot.docs.map((doc) => doc.data()));
            });
    };
    const [allData, setAllData] = useState([]);
    useLayoutEffect(() => {
        //エラー処理は書こう

        // todo データ形式の更新（新しいものに書き換え）
        //データの形式
        //json
        // {
        //   id:string,
        //   registrationDate:Date
        //   majorDivisions:string,
        //   place:string,
        //   detial:string,
        //   contents:string,
        //   message:string,
        //   latitude:string,
        //   longitude:string,
        // }[]
        (async () => {
            const res = await fetch(process.env.REACT_APP_SPREADSHEET_API_URL);
            const json = await res.json();
            db.collection("messages")
                .orderBy("timestamp")
                .limit(50)
                .onSnapshot((snapshot) => {
                    setDBMessages(snapshot.docs.map((doc) => doc.data()));
                });
            fetchImgUrl();

            setMapData(json.filter((data) => data.complete !== true));
            setArchivedMapData(json.filter((data) => data.complete === true));
            setLoad(false);
            setDisplayMapIcons(json.filter((data) => data.complete !== true));
            setAllData(json);
        })();
    }, []);

    const changeManager = (id, manager) => {
        setMapData(
            mapData.map((data) => {
                if (data.id === id) {
                    return { ...data, manager: manager };
                }
                return data;
            })
        );
    };

    return (
        <>
            {load ? (
                <LoadingScreen />
            ) : (
                <>
                    <Header title="Road-Repair-Support-System" />
                    <div
                        style={{
                            display: "flex",
                            height: "80vh",
                            width: "100vw",
                        }}
                    >
                        <ImageUrl.Provider value={imgUrl}>
                            <SaveProgress.Provider value={saveProgress}>
                                <ArchiveMapData.Provider value={archiveMapData}>
                                    <ChangeManager.Provider
                                        value={changeManager}
                                    >
                                        <SaveDisplayMapIcons.Provider
                                            value={saveDisplayMapIcons}
                                        >
                                            <RevertArchive.Provider
                                                value={revertArchive}
                                            >
                                                <SideMenu
                                                    mapData={mapData}
                                                    allData={allData}
                                                    archivedMapData={
                                                        archivedMapData
                                                    }
                                                    saveDisplayMapIcons={
                                                        saveDisplayMapIcons
                                                    }
                                                    dbMessages={dbMessages}
                                                />

                                                <Map
                                                    defaultPosition={
                                                        defaultPosition
                                                    }
                                                    displayMapIcons={
                                                        displayMapIcons
                                                    }
                                                    dbMessages={dbMessages}
                                                    saveProgress={saveProgress}
                                                />
                                            </RevertArchive.Provider>
                                        </SaveDisplayMapIcons.Provider>
                                    </ChangeManager.Provider>
                                </ArchiveMapData.Provider>
                            </SaveProgress.Provider>
                        </ImageUrl.Provider>
                    </div>
                </>
            )}
        </>
    );
};

export default Home;

//やりたいこと
// マップ上のアイコンの改修-アイコンの上に数字を表示させる
// マップ上のアイコンのポップアップの改修
// -ポップアップが同じ場所に複数個あればそれも表示させる
// 時間で並べ替え・検索機能
//画面の左右の空白を消す

// const testData={contents: "路面汚損・清掃",
// detail: "",
// id: "20f39ac7-6df3-41fd-8ab4-18cafafc73db",
// latitude: 42.83416857,
// longitude: 141.6590189,
// majorDivisions: "河川",
// message: "水族館の入り口がとても汚いです",
// place: "サーモンパーク",
// registrationDate: "2022-05-03T08:30:29.405Z"}
