import { useState } from "react";

import MapList from "./Incomplete/MapList";
import { useEffect } from "react";

import { TextField } from "@mui/material";

import { css } from "@emotion/react";

const Complete = ({ mapData, dbMessages }) => {
    const [keyword, setKeyword] = useState("");
    const [filteredData, setFilteredData] = useState(mapData);

    const handleChange = (e) => {
        const newKeyword = e.target.value;
        setKeyword(newKeyword);
    };

    useEffect(() => {
        console.log("変更 : " + keyword);

        const searchKeyword = keyword
            .trim()
            .toLowerCase()
            .match(/[^\s]+/g);

        if (keyword === "" || searchKeyword === null) {
            setFilteredData(mapData);
            return;
        }

        const result = mapData.filter((data) =>
            searchKeyword.every(
                (kw) => data.respondent_name.toLowerCase().indexOf(kw) !== -1
            )
        );
        setFilteredData(result);
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
                <div css={styles.message}>未完了のデータがありません</div>
            ) : 
            filteredData.length !== 0 ? (
                <MapList mapData={filteredData} dbMessages={dbMessages} />
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
    `
};

export default Complete;