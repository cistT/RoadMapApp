import React, { useContext } from "react";
import GroupOrientation from "../../ui/button/GroupOrientation";
import { Box, ListItem, ToggleButton } from "@mui/material";
import { ListItemText } from "@mui/material";
import { List } from "@mui/material";
import Images from "./Images";
import SendImage from "./SendImage";
import { db } from "../../../firebase.js";
import { ImageUrl } from "../../page/Home";
import SendMessage from "./SendMessage";
import { Suspense } from "react";
import { css } from "@emotion/react";
const Form = ({ mapData, dbMessages }) => {
    const imgUrl = useContext(ImageUrl);
    // const [imgUrl, setImgUrl] = React.useState([]);
    // const fetchImgUrl = () => {
    //     db.collection("img")
    //         // .where("mapDataId", "==", mapData.id)
    //         .orderBy("time")
    //         .limit(50)
    //         .onSnapshot((snapshot) => {
    //             setImgUrl(...snapshot.docs.map((doc) => doc.data()));
    //         });
    // };
    // React.useEffect(() => {
    //     fetchImgUrl();
    // }, []);

    return (
        <div style={{ width: "40vw" }}>
            <div css={style1}>
            <GroupOrientation css={style3}/>
                <List css={style}>
                    {dbMessages.map((message, i) => (
                        <ListItem key={i}>
                            <ListItemText primary={message.message} />
                        </ListItem>
                    ))}
                </List>
            </div>
                
            
            <SendMessage mapDataId={mapData.id} />
            <SendImage mapDataId={mapData.id} />
            <Suspense fallback={<p>Loading...</p>}>
                <Images mapDataId={mapData.id} imgUrl={imgUrl} />
            </Suspense>
        </div>
    );
};
export default Form;

const style = css`
    width: 70%;
    bgcolor: background.paper;
    position: relative;
    overflow: scroll;
    maxheight: 70%;
    height: 70%;
    border: 1px solid;
`;

const style1 = css`
    display: flex;
`;

const style3=css`
position:fixed;
left: 50%;
top: 50%;
`

//https://mui.com/material-ui/react-text-fiel
