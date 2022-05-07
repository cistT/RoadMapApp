import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import {IconButton,Tooltip} from '@mui/material';

const CloseButton=({title="閉じる",onClick})=>{

    return (
        <Tooltip title={title}>
            <IconButton onClick={onClick} >
                <KeyboardDoubleArrowLeftIcon />
            </IconButton>
        </Tooltip>
    )
}

export default CloseButton;