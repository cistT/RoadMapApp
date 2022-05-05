import DitailDialog from '../../Dialog/DitailDialog'
import {Divider} from '@mui/material';

const ArchiveListItem=({archivedMapData})=>{

    return (
        <ul>
            <div style={{display: 'flex',justifyContent:'space-between'}}>
                <DitailDialog  mapData={archivedMapData} />
            </div>
            <Divider />
        </ul>
    )

}
export default ArchiveListItem;