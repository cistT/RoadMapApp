import {IconButton,Tooltip} from '@mui/material';
import ArchiveIcon from '@mui/icons-material/Archive';


const ArchiveButton=({title="アーカイブに移動する",onClick})=>{
    return (
        <Tooltip title="アーカイブに移動する">
            <IconButton onClick={onClick} style={{height:'50px',width:'50px'}}>
                <ArchiveIcon />
            </IconButton>
        </Tooltip>
    )
}

export default ArchiveButton;