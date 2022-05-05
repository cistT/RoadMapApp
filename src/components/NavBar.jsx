import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar=({title})=>{

    return (
    <div style={{height:"60px",width:"100vw"}}>
        <AppBar>
            <Toolbar>
                <Typography variant="h5">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default NavBar;