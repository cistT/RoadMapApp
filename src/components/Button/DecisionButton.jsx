import {Button} from '@mui/material';

const DecisionButton=({decisionMessage})=>{

    return (
        <>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div>{decisionMessage}</div>
                <Button type="submit" style={{float:'right'}}>
                    決定
                </Button>
            </div>
        </>
    )
}

export default DecisionButton;