import { useState, useLayoutEffect } from "react";

import NavBar from "./components/NavBar";
import Map from "./components/Map";
import SideMenu from "./components/SideMenu";
import LoadingScreen from "./components/LoadingScreen";

//変数名は適宜変えよう

//URLさえわかれば、だれでも情報の書き換えができてしまうのでログイン機能の実装が必要
const App=()=> {

  const [load,setLoad] = useState(true);
  const [mapData,setMapData]=useState([]);

  useLayoutEffect(()=>{
    //URLはenvファイルに隠そう
    //エラー処理は書こう
    //リロードが終わった後すぐにダイアログを表示させたらダイアログが消えてします
      (async()=>{
          const res=await fetch(process.env.REACT_APP_SPREADSHEET_API_URL);
          const json=await res.json();
          setMapData(json);
          setLoad(false);
      })()
  },[]);

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
  const [archivedMapData,setArchivedMapData]=useState([]);
  const archiveMapData=(newArchiveMapData)=>{
    setArchivedMapData([...archivedMapData,newArchiveMapData]);
    setMapData(mapData.filter(data=>data.id!==newArchiveMapData.id));
  }

  return (
    <>
      {
        load?(
          <LoadingScreen />
          ):(
            <>
              <NavBar title="Road-Map" />
              <div style={{display:"flex"}}>
                  <SideMenu
                    mapData={mapData}
                    updateMapData={updateMapData}
                    archivedMapData={archivedMapData}
                    archiveMapData={archiveMapData}
                  />
                  <Map
                    defaultPosition={defaultPosition}
                    mapData={mapData}
                  />
              </div>
            </>
          )
      }
    </>
  );
}

export default App;
