import {IconButton,Tooltip} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const EditButton=({
    onClick,
    title="編集する"
})=>{

    return (
        <Tooltip title={title}>
            <IconButton onClick={onClick} style={{height:'50px',width:'50px'}}>
                <EditIcon />
            </IconButton>
        </Tooltip>
    )
}

export default EditButton;