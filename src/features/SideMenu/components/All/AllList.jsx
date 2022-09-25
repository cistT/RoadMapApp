import React from "react";
import { useContext } from "react";

import { List } from "@mui/material";
import CompleteListItem from "../Complete/CompleteListItem";
import MapListItem from "../Incomplete/MapListItem";
import { SaveDisplayMapIcons } from "page/Home";

const AllList = ({allMapData, dbMessages }) => {
    const saveDisplayMapIcons = useContext(SaveDisplayMapIcons);
    return (
        <>
        {/* <button onClick={()=>{console.log(allMapData)}}>ログ</button> */}
            <List
                sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    position: "relative",
                    overflow: "auto",
                    maxHeight: "80%",
                    height: "80%",
                    "& ul": { padding: 0 },
                }}
            >
                {allMapData.map((data) => (
                    data.complete ? (
                        <CompleteListItem
                            saveDisplayMapIcons={() =>
                                saveDisplayMapIcons(
                                    allMapData.filter(
                                        (tmpData) => data.id !== tmpData.id
                                    )
                                )
                            }
                            archivedMapData={data}
                            dbMessages={dbMessages.filter(
                                (message) => message.id === data.id
                            )}
                            key={data.id}
                        />
                    ) : (
                        <MapListItem
                            mapData={data}
                            dbMessages={dbMessages.filter(
                                (message) => message.id === data.id
                            )}
                            key={data.id}
                        />
                    )
                ))}
            </List>
        </>
    );
};

export default AllList;
