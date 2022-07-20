import React from "react";
import ArchiveList from "../Archive/ArchiveList";

const Archive = ({ archivedMapData, dbMessages }) => {
    return (
        <div style={{ width: "40vw", height: "70vh" }}>
            <h2>完了済み</h2>
            <ArchiveList
                archivedMapData={archivedMapData}
                dbMessages={dbMessages}
            />
        </div>
    );
};

export default Archive;
