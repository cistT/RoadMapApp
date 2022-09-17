import { useState } from "react";

import { useEffect } from "react";
import { TextField } from "@mui/material";
import { css } from "@emotion/react";

import AllList from "./All/AllList";
import bindingMapData from "utils/bindingMapData";

const All = ({ mapData, archivedMapData, dbMessages }) => {
    const allMapData = bindingMapData(mapData, archivedMapData);

    const [keyword, setKeyword] = useState("");
    const [filteredData, setFilteredData] = useState(allMapData);

    const handleChange = (e) => {
        const newKeyword = e.target.value;
        setKeyword(newKeyword);
    };

    useEffect(() => {
        const searchKeyword = keyword
            .trim()
            .toLowerCase()
            .match(/[^\s]+/g);

        if (keyword === "" || searchKeyword === null) {
            setFilteredData(allMapData);
            return;
        }

        const result = allMapData.filter((data) =>
            searchKeyword.every(
                (kw) => data.respondent_name.toLowerCase().indexOf(kw) !== -1
            )
        );
        setFilteredData(result);

        // console.log(mapData);
        // console.log(archivedMapData);
        // console.log(allMapData);
        // console.log(filteredData);

    }, [keyword]);

    return (
        <>
            <TextField
                id="field"
                variant="outlined"
                label="検索"
                onChange={(e) => {
                    handleChange(e);
                }}
                css={styles.textField}
            />
            {filteredData === undefined ? (
                <div css={styles.message}>データがありません</div>
            ) : filteredData.length !== 0 ? (
                <AllList allMapData={filteredData} dbMessages={dbMessages} />
            ) : (
                <div css={styles.message}>該当する検索結果がありません</div>
            )}
        </>
    );
};

const styles = {
    textField: css`
        justify-content: center;
        width: 90%;
        margin: 5px 5% 0;
    `,
    message: css`
        text-align: center;
        margin-top: 10px;
    `,
};

export default All;
