import {IconButton,Tooltip} from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';


const RevertButton=({title="元に戻す",onClick})=>{
    return (
        <Tooltip title="元に戻す">
            <IconButton onClick={onClick} style={{height:'50px',width:'50px'}}>
                <UndoIcon />
            </IconButton>
        </Tooltip>
    )
}

export default RevertButton;