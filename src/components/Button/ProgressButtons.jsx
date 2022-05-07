import {Button} from '@mui/material';
import Typography from '@mui/material/Typography';

const ProgressButtons=({saveProgress,mapData})=>{

    const buttons=[
        {label:"20%",value:20},
        {label:"40%",value:40},
        {label:"60%",value:60},
        {label:"80%",value:80},
        {label:"100%",value:100},
    ];

    return (
        <>
            <Typography gutterBottom>進捗状況</Typography>
            <div style={{display:'flex',flexWrap:'wrap'}}>
                {buttons.map(button=>(
                    <Button
                        onClick={()=>saveProgress(mapData.id,button.value)}
                        variant="outlined"
                        style={{
                            height:'40px',
                            width:'60px',
                            margin:'5px'
                        }}
                        key={button.label}
                    >
                        {button.label}
                    </Button>
                ))}
            </div>
        </>
    )
}

export default ProgressButtons;