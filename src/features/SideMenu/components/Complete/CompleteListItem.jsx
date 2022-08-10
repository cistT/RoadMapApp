import { useContext } from "react";

import { Divider } from "@mui/material";

import { RevertArchive } from "page/Home";

import DitailDialog from "features/DitailDialog/DitailDialog";
import ToIncompleteDialog from "features/SideMenu/components/Complete/ToIncompleteDialog";

const ArchiveListItem = ({
    archivedMapData,
    saveDisplayMapIcons,
    dbMessages,
}) => {
    const revertArchive = useContext(RevertArchive);

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <DitailDialog
                    mapData={archivedMapData}
                    hideProgress
                    dbMessages={dbMessages}
                />
                <ToIncompleteDialog
                    mapData={archivedMapData}
                    onClickRevertButton={() => {
                        saveDisplayMapIcons();
                        revertArchive(archivedMapData);
                    }}
                />
            </div>
            <Divider />
        </>
    );
};
export default ArchiveListItem;
