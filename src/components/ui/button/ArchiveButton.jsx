import {IconButton,Tooltip} from '@mui/material';
import ArchiveIcon from '@mui/icons-material/Archive';


const ArchiveButton=({title="完了にする",onClick})=>{
    return (
        <Tooltip title="完了にする">
            <IconButton onClick={onClick} style={{height:'50px',width:'50px'}}>
                <ArchiveIcon />
            </IconButton>
        </Tooltip>
    )
}

export default ArchiveButton;