import React from "react";
import MapList from "../SideMenu/MapList";

const List = ({ mapData, dbMessages }) => {
    return (
        <div style={{ width: "40vw", height: "70vh" }}>
            <h2>一覧</h2>
            <MapList mapData={mapData} dbMessages={dbMessages} />
        </div>
    );
};

export default List;
