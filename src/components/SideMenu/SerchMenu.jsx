import { useState} from "react";

import MapList from "./MapList";
import SelectForm from './SearchMenu/SelectForm'
import SearchMenuBar from "./SearchMenuBar";

import {Button} from '@mui/material';

const SearchMenu=({
    mapData,
    toggleIsFocused,
    updateMapData,
    archiveMapData
})=>{
    const  majorDivisionsSelect=[
        "指定なし","河川","幹線道路","生活道路","それ以外",
    ]
    const placeSelect=[
        "指定なし","JR千歳駅","JR南千歳駅","JR新千歳空港","サーモンパーク",
        "陸上自衛隊 北千歳駐屯地","航空自衛隊千歳","陸上自衛隊 東千歳駐屯地",
        "公立千歳科学技術大学",
    ];
    const contentsSelect=[
        "指定なし","マンホール・桝不良","街路樹剪定","街路樹剪定・伐採",
        "街路灯関係","車道劣化・破損","振動(段差)",
        "水溜り","道路施設破損","道路草刈関係","歩道劣化・破損",
        "未舗装路線関係","路肩、法面等崩れ・破損",
        "路面汚損・清掃","その他",
    ];
    const [majorDivisions,setMajorDivisions]=useState("");
    const [place,setPlace]=useState("");
    const [contents,setContents]=useState("");

    const [menu,setMenu]=useState(0);
    const selectMenu=(i)=>setMenu(i);

    return (
    <>
        <SearchMenuBar menu={menu} selectMenu={selectMenu} />
        {
            menu===0&&(
                <div>
                <SelectForm
                    selectLavel="大区分"
                    select={majorDivisionsSelect}
                    changeSelectValue={setMajorDivisions}
                    defaultValue={majorDivisions}
                />
                <SelectForm
                    selectLavel="場所"
                    select={placeSelect}
                    changeSelectValue={setPlace}
                    defaultValue={place}
                />
                <SelectForm
                    selectLavel="内容"
                    select={contentsSelect}
                    changeSelectValue={setContents}
                    defaultValue={contents}
                />
                <Button
                    onClick={()=>setMenu(1)}
                    variant="outlined"
                    style={{height:'60px',width:'100px',float:'right',margin:'10px'}}
                >
                    検索
                </Button>
            </div>)
        }

        {menu===1&&(
            <>
                <MapList
                    title=""
                    mapData={mapData.filter((data)=>(
                        data.majorDivisions.includes(majorDivisions)&&
                        data.place.includes(place)&&
                        data.contents.includes(contents)
                    ))}
                    toggleIsFocused={toggleIsFocused}
                    updateMapData={updateMapData}
                    archiveMapData={archiveMapData}
                />
                <Button
                    onClick={()=>setMenu(0)}
                    variant="outlined"
                    style={{height:'60px',width:'100px',float:'right',margin:'10px'}}
                >
                戻る
                </Button>
            </>
        )}

    </>
    )
}

export default SearchMenu;

//mapData.filter((data)=>(data.place.includes(serchPlace)))

// {/* <SearchMenuBar
//             menu={searchMenu}
//             selectMenu={selectSearchMenu}
//         /> */}

// {
//     searchMenu===0&&(
//         <>
//         <div style={{margin:'10px 5px'}}>場所を入力してください</div>
//             <form onSubmit={handleSubmit(onSubmit)} style={{display:'flex'}}>
//                 <TextField
//                     label="検索"
//                     {...register("place")}
//                     style={{width:'80%'}}
//                     />
//                 <Tooltip title="検索">
//                     <IconButton type="submit" style={{height:'60px',width:'60px'}}>
//                         <SearchIcon />
//                     </IconButton>
//                 </Tooltip>
//             </form>
//             <MapList
//                 title="検索結果"
//                 mapData={mapData.filter((data)=>(data.place.includes(serchPlace)))}
//                 toggleIsFocused={toggleIsFocused}
//                 updateMapData={updateMapData}
//             />
//         </>
//     )
// }