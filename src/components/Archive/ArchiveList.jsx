import ArchiveListItem from './ArchiveList/ArchiveListItem'
import {List} from '@mui/material';

const ArchiveList=({
    archivedMapData,
})=>{
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
            subheader={<li />}
        >
            {archivedMapData.map(data=>(
                <li key={data.id}>
                    <ArchiveListItem archivedMapData={data} />
                </li>
            ))}
        </List>
    </>)
}

export default ArchiveList;