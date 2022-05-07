import { useState, useLayoutEffect,createContext} from "react";

import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";
import SideMenu from "./components/SideMenu";
import Map from "./components/Map";

//全体のソースコード
//変数名は適宜変えよう
//CSSはcss-in-jsで書き直したほうが良い

//プロップスリレーが生じていたのでuseContextで実装した
export const SaveProgress=createContext();
export const SaveDisplayMapIcons=createContext();
export const ArchiveMapData=createContext();
export const UpdateMapData=createContext();
export const RevertArchive=createContext();

//URLさえわかれば、だれでも情報の書き換えができてしまうのでログイン機能の実装が必要
const App=()=> {

  const [load,setLoad] = useState(true);
  const [mapData,setMapData]=useState([]);

  //千歳市の緯度と経度
  const defaultPosition={latitude:42.82128669999999, longitude:141.6510125};

  //この関数名だと一部のデータを更新しているのか
  //全部のデータを更新しているのかがわかりにくい
  const updateMapData=(updateMessage,updateId)=>{
      setMapData(mapData.map((data)=>{
        if(data.id===updateId){
          return {...data,message:updateMessage}
        }
        return data;
      }))
  }

  const [displayMapIcons,setDisplayMapIcons]=useState([]);
  const saveDisplayMapIcons=(mapData)=>setDisplayMapIcons(mapData);

  const [archivedMapData,setArchivedMapData]=useState([]);
  const archiveMapData=(newArchiveMapData)=>{
    setArchivedMapData([...archivedMapData,newArchiveMapData]);
    saveDisplayMapIcons(displayMapIcons.filter(data=>data.id!==newArchiveMapData.id));
    setMapData(mapData.filter(data=>data.id!==newArchiveMapData.id));
  }



  const saveProgress=(mapDataId,progress)=>{
    setMapData(mapData.map((data)=>{
      if(data.id===mapDataId){
        return {...data,"progress":progress}
      }
      return data;
    }));
  }

  const revertArchive=(revertMapData)=>{
    setArchivedMapData(archivedMapData.filter(data=>data.id!==revertMapData.id));
    setMapData([...mapData,revertMapData]);
  }

  useLayoutEffect(()=>{
    //エラー処理は書こう
    //リロードが終わった後すぐにダイアログを表示させたらダイアログが消えてしまう

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
      (async()=>{
          const res=await fetch(process.env.REACT_APP_SPREADSHEET_API_URL);
          const json=await res.json();
          setMapData(json);
          setLoad(false);
          setDisplayMapIcons(json);
      })()
  },[]);

  return (
    <>
      {load?(
          <LoadingScreen />
          ):(
            <>
              <NavBar title="Road-Map (試作品)" />

              <section style={{display: 'flex'}}>
                {/* よりよい書き方がありそう */}
                  <SaveProgress.Provider value={saveProgress}>
                    <UpdateMapData.Provider value={updateMapData}>
                      <ArchiveMapData.Provider value={archiveMapData}>
                        <SaveDisplayMapIcons.Provider value={saveDisplayMapIcons}>
                          <RevertArchive.Provider value={revertArchive}>
                            <SideMenu
                              mapData={mapData}
                              archivedMapData={archivedMapData}
                              saveDisplayMapIcons={saveDisplayMapIcons}
                            />
                          </RevertArchive.Provider>
                        </SaveDisplayMapIcons.Provider>
                      </ArchiveMapData.Provider>
                    </UpdateMapData.Provider>
                  </SaveProgress.Provider>

                  <Map
                    defaultPosition={defaultPosition}
                    displayMapIcons={displayMapIcons}
                    updateMapData={updateMapData}
                    archiveMapData={archiveMapData}
                  />
              </section>
            </>
          )
      }
    </>
  );
}

export default App;


//やりたいこと
// マップ上のアイコンの改修-アイコンの上に数字を表示させる
// マップ上のアイコンのポップアップの改修
// -ポップアップが同じ場所に複数個あればそれも表示させる
// 時間で並べ替え・検索機能
//画面の左右の空白を消す
