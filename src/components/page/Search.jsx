import React from "react";
import SearchMenu from "../SideMenu/SearchMenu";

const Search = ({ mapData, saveDisplayMapIcons, dbMessages }) => {
    return (
        <div style={{ width: "40vw", height: "70vh" }}>
            <SearchMenu
                mapData={mapData}
                saveDisplayMapIcons={saveDisplayMapIcons}
                dbMessages={dbMessages}
            />
        </div>
    );
};

export default Search;
