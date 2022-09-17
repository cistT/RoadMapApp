const bindingMapData = (mapData, archivedMapData) => {
    if (mapData === undefined) return [...archivedMapData];
    if (archivedMapData === undefined) return [...mapData];

    const newKeysArray = [...Array(archivedMapData.length).keys()].map((i) =>
        String(i + mapData.length)
    );

    const newKeysObject = { ...newKeysArray };

    const newArchivedMapDataList = renameKeys(archivedMapData, newKeysObject);

    const newArchivedMapData = newArchivedMapDataList.filter(
        (data) => data !== undefined
    );

    return [...mapData, ...newArchivedMapData];
};

const renameKeys = (obj, newKeys) => {
    const keyValues = Object.keys(obj).map((key) => {
        const newKey = newKeys[key] || key;
        return { [newKey]: obj[key] };
    });

    return Object.assign([], ...keyValues);
};

export default bindingMapData;
