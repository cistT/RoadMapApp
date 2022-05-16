import {useContext} from 'react'

import {List} from '@mui/material';

import {SaveDisplayMapIcons} from "../../App";
import ArchiveListItem from './ArchiveList/ArchiveListItem'

const ArchiveList=({
    archivedMapData,
    dbMessages
})=>{
    const saveDisplayMapIcons=useContext(SaveDisplayMapIcons);
    return (
    <>
        <List
            sx={{
                width: '100%',
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: '80%',
                height:'80%',
                '& ul': { padding: 0 },
            }}
        >
            {archivedMapData.map(data=>(
                <ArchiveListItem
                    saveDisplayMapIcons={()=>saveDisplayMapIcons(archivedMapData.filter(tmpData=>data.id!==tmpData.id))}
                    archivedMapData={data}
                    dbMessages={dbMessages.filter((message)=>message.id===data.id)}
                    key={data.id}
                />
            ))}
        </List>
    </>)
}

export default ArchiveList;