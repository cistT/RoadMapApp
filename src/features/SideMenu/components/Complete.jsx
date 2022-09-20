import { useState } from "react";

import { css } from "@emotion/react";

import { TextField } from "@mui/material";

import CompleteList from "./Complete/CompleteList";

const Incomplete = ({ archivedMapData, dbMessages }) => {
    const [keyword, setKeyword] = useState("");

    const handleChange = (e) => {
        const newKeyword = e.target.value;
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
            {archivedMapData.length === 0 ? (
                <div css={styles.message}>完了のデータがありません</div>
            ) : archivedMapData.filter((data) =>
                  data.respondent_name.includes(keyword)
              ).length !== 0 ? (
                <CompleteList
                    archivedMapData={archivedMapData.filter((data) =>
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

export default Incomplete;
