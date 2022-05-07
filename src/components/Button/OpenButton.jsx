import {Button,Tooltip} from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

//汎用性を高めるならばstyleも指定できるようにする必要がある
const OpenButton=({title="開く",onClick})=>{

    return (
    <Tooltip title={title}>
        <Button
            onClick={onClick}
            style={{
                width:'10px',
                position: 'relative'
            }}
        >
            <KeyboardDoubleArrowRightIcon />
        </Button>
    </Tooltip>
    )
}

export default OpenButton;