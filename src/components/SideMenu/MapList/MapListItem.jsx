import DitailDialog from '../../Dialog/DitailDialog'
import FormDialog from '../../Dialog/FormDialog'
import ArchiveDialog from '../../Dialog/ArchiveDialog'

import {Divider} from '@mui/material';


const MapListItem=({mapData,updateMapData,archiveMapData})=>{
    return (
    <>
        <ul>
            <div style={{display: 'flex',justifyContent:'space-between'}}>
                <DitailDialog  mapData={mapData} />
                <FormDialog mapData={mapData} updateMapData={updateMapData}/>
                <ArchiveDialog mapData={mapData} archiveMapData={archiveMapData}/>
            </div>
            <Divider />
        </ul>
    </>
    )
}

export default MapListItem;