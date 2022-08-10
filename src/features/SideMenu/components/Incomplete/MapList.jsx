import { List } from "@mui/material";

import MapListItem from "./MapListItem";

const MapList = ({ mapData, dbMessages }) => {
    return (
        <>
            <List
                sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    position: "relative",
                    overflow: "auto",
                    maxHeight: "80%",
                    height: "80%",
                }}
            >
                {mapData.map((data) => (
                    <MapListItem
                        mapData={data}
                        dbMessages={dbMessages.filter(
                            (message) => message.id === data.id
                        )}
                        key={data.id}
                    />
                ))}
            </List>
        </>
    );
};

export default MapList;
