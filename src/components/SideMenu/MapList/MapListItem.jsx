import {useContext} from 'react'
import {Divider} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

import {SaveProgress,UpdateMapData,ArchiveMapData} from "../../../App";

import DitailDialog from '../../Dialog/DitailDialog'
import FormDialog from '../../Dialog/FormDialog'
import ArchiveDialog from '../../Dialog/ArchiveDialog'

const MapListItem=({
    mapData,
})=>{
    const linearProgressColor=()=>{
        if(mapData.progress===20){
            return "warning";
        }else if(mapData.progress===40){
            return 'error';
        }else if(mapData.progress===60){
            return "success" ;
        }else if(mapData.progress===80){
            return "secondary";
        }else if(mapData.progress===100){
            return 'primary';
        }
    }

    const saveProgress=useContext(SaveProgress);
    const updateMapData=useContext(UpdateMapData);
    const archiveMapData=useContext(ArchiveMapData);

    return (
    <>
        <div style={{display: 'flex',justifyContent:'space-between'}}>
            <DitailDialog
                mapData={mapData}
                saveProgress={saveProgress}
            />
            <FormDialog
                mapData={mapData}
                updateMapData={updateMapData}
            />
            <ArchiveDialog
                mapData={mapData}
                archiveMapData={archiveMapData}
            />
        </div>
        <LinearProgress
            variant="determinate"
            value={mapData?.progress??0}
            color={linearProgressColor()}
        />
        <Divider />
    </>
    )
}

export default MapListItem;