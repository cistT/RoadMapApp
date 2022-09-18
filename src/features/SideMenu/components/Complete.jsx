import { useState } from "react";

import { useEffect } from "react";

import { TextField } from "@mui/material";

import { css } from "@emotion/react";
import CompleteList from "./Complete/CompleteList";

const Incomplete = ({ archivedMapData, dbMessages }) => {
    const [keyword, setKeyword] = useState("");
    const [filteredData, setFilteredData] = useState(archivedMapData);

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
            setFilteredData(archivedMapData);
            return;
        }

        const result = archivedMapData.filter((data) =>
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
            {archivedMapData.length === 0 ? (
                <div css={styles.message}>完了のデータがありません</div>
            ) : filteredData.length !== 0 ? (
                <CompleteList archivedMapData={filteredData} dbMessages={dbMessages} />
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

export default Incomplete;
