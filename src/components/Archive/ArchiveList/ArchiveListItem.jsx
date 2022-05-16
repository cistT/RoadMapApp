import {useContext} from 'react'

import {Divider} from '@mui/material';

import {RevertArchive} from "../../../App";

import DitailDialog from '../../Dialog/DitailDialog';
import RevertDialog from '../../Dialog/RevertDialog';

const ArchiveListItem=({archivedMapData,saveDisplayMapIcons,dbMessages})=>{

    const revertArchive=useContext(RevertArchive);

    return (
        <>
            <div style={{display: 'flex',justifyContent:'space-between'}}>
                <DitailDialog  mapData={archivedMapData} hideProgress  dbMessages={dbMessages}/>
                <RevertDialog
                    mapData={archivedMapData}
                    onClickRevertButton={()=>{
                        saveDisplayMapIcons();
                        revertArchive(archivedMapData);
                    }}
                />
            </div>
            <Divider />
        </>
    )

}
export default ArchiveListItem;