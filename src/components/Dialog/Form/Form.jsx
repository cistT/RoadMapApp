import React, { useContext } from "react";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { List } from "@mui/material";
import Images from "./Images";
import SendImage from "./SendImage";
import { db } from "../../../firebase.js";
import { ImageUrl } from "../../page/Home";

import SendMessage from "./SendMessage";
import { Suspense } from "react";
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
            <>
                <List
                    sx={{
                        width: "100%",
                        bgcolor: "background.paper",
                        position: "relative",
                        overflow: "auto",
                        maxHeight: "70%",
                        height: "70%",
                        border: "1px solid",
                    }}
                >
                    {dbMessages.map((message, i) => (
                        <ListItem key={i}>
                            <ListItemText primary={message.message} />
                        </ListItem>
                    ))}
                </List>
            </>
            <SendMessage mapDataId={mapData.id} />
            <SendImage mapDataId={mapData.id} />
            <Suspense fallback={<p>Loading...</p>}>
                <Images mapDataId={mapData.id} imgUrl={imgUrl} />
            </Suspense>
        </div>
    );
};
export default Form;

//https://mui.com/material-ui/react-text-fiel
