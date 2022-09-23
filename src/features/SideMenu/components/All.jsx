import { useState } from "react";

import { css } from "@emotion/react";

import { TextField } from "@mui/material";

import AllList from "./All/AllList";

const All = ({ allMapData, dbMessages, saveDisplayMapIcons }) => {
    const [keyword, setKeyword] = useState("");

    const changeMapIcons = (newKeyword) => {
        saveDisplayMapIcons(
            allMapData.filter((data) => data.respondent_name.includes(newKeyword))
        );
    };

    const handleChange = (e) => {
        const newKeyword = e.target.value;
        changeMapIcons(newKeyword);
        setKeyword(newKeyword);
    };

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
            {allMapData === undefined ? (
                <div css={styles.message}>データがありません</div>
            ) : allMapData.filter((data) =>
                  data.respondent_name.includes(keyword)
              ).length !== 0 ? (
                <AllList
                    allMapData={allMapData.filter((data) =>
                        data.respondent_name.includes(keyword)
                    )}
                    dbMessages={dbMessages}
                />
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
