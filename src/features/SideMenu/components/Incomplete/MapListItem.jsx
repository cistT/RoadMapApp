import { useContext } from "react";
import { Divider } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

import { SaveProgress, ArchiveMapData } from "page/Home";

import DitailDialog from "features/DitailDialog/DitailDialog";
import ToCompleteDialog from "./ToCompleteDialog";

const MapListItem = ({ mapData, dbMessages }) => {
    const saveProgress = useContext(SaveProgress);
    const archiveMapData = useContext(ArchiveMapData);

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <DitailDialog
                    mapData={mapData}
                    saveProgress={saveProgress}
                    dbMessages={dbMessages}
                />
                <ToCompleteDialog
                    mapData={mapData}
                    archiveMapData={archiveMapData}
                />
            </div>
            <LinearProgress
                variant="determinate"
                value={mapData?.progress ?? 0}
            />
            <Divider />
        </>
    );
};

export default MapListItem;
