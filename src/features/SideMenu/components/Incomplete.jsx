import { useState } from "react";

import { css } from "@emotion/react";

import { TextField } from "@mui/material";

import MapList from "./Incomplete/MapList";
import TitleRow from "../TitleRow";

const Complete = ({ mapData, dbMessages, saveDisplayMapIcons }) => {
    const [keyword, setKeyword] = useState("");

    const changeMapIcons = (newKeyword) => {
        saveDisplayMapIcons(
            mapData.filter((data) => data.respondent_name.includes(newKeyword))
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
            <TitleRow />
            {mapData.length === 0 ? (
                <div css={styles.message}>未完了のデータがありません</div>
            ) : mapData.filter((data) => data.respondent_name.includes(keyword))
                  .length !== 0 ? (
                <MapList
                    mapData={mapData.filter((data) =>
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

export default Complete;
