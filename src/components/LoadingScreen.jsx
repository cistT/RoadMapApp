import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingScreen=()=>{

    return (
        <>
            <Box
                style={{
                    height:'100vh',
                    width:'100vw',
                    textAlign:'center',
                    position: 'relative',
                }}
            >
                <div style={{
                    position:'absolute',
                    top: '50%',
                    left: '50%',
                    transform:' translateY(-50%) translateX(-50%)'
                }}>
                    <CircularProgress
                        style={{height:'150px',width:'150px'}}
                    />
                    <div style={{fontSize:'50px',margin:'30px'}}>ロード中</div>
                </div>

            </Box>
        </>
    )
}

export default LoadingScreen;

//画面の中央ぞろえ　参考
//https://www.granfairs.com/blog/staff/centering-by-css