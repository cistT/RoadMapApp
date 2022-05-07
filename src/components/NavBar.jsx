import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import UsageDialog from './Dialog/UsageDialog';

const NavBar=({title})=>{
    return (
    <div style={{height:"60px",width:"90vw"}}>
        <AppBar>
            <Toolbar style={{display:"flex",justifyContent:"space-between"}}>
                <Typography variant="h5">
                    {title}
                </Typography>
                <UsageDialog />
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default NavBar;