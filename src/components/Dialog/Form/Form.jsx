import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { List } from "@mui/material";
import SendImage from "./SendImage";

import SendMessage from "./SendMessage";
const Form = ({ mapDataId, dbMessages }) => {
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
            <SendMessage mapDataId={mapDataId} />
            <SendImage />
        </div>
    );
};
export default Form;

//https://mui.com/material-ui/react-text-fiel
