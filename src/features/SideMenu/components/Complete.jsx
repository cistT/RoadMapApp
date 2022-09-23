import { useState } from "react";

import { css } from "@emotion/react";

import { TextField } from "@mui/material";

import CompleteList from "./Complete/CompleteList";
import TitleRow from "../TitleRow";
import SelectSearchItem from "./SearchMenu/SelectSearchItem";
import SelectSortItem from "./SearchMenu/SelectSortItem";

const Complete = ({ archivedMapData, dbMessages, saveDisplayMapIcons }) => {
    const [keyword, setKeyword] = useState("");
    const [searchItem, setSearchItem] = useState("respondent_name");

    const changeMapIcons = (newKeyword) => {
        saveDisplayMapIcons(
            archivedMapData.filter((data) =>
                data[searchItem].includes(newKeyword)
            )
        );
    };

    const handleChange = (e) => {
        const newKeyword = e.target.value;
        changeMapIcons(newKeyword);
        setKeyword(newKeyword);
    };

    return (
        <>
            <div css={styles.searchContainer}>
                <TextField
                    id="field"
                    variant="outlined"
                    label="検索"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    css={styles.textField}
                />
                <div css={styles.buttons}>
                    <SelectSearchItem setSearchItem={setSearchItem} />
                    {/* TODO: 並び替え機能 */}
                    <SelectSortItem />
                </div>
            </div>
            <TitleRow />
            {archivedMapData.length === 0 ? (
                <div css={styles.message}>完了のデータがありません</div>
            ) : archivedMapData.filter((data) =>
                  data[searchItem].includes(keyword)
              ).length !== 0 ? (
                <CompleteList
                    archivedMapData={archivedMapData.filter((data) =>
                        data[searchItem].includes(keyword)
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
    searchContainer: css`
        display: flex;
    `,
    buttons: css`
        width: 40%;
        margin-top: 5px;
        margin-right: 2%;
    `,
    textField: css`
        justify-content: left;
        width: 70%;
        margin: 5px 2% 0;
    `,
    message: css`
        text-align: center;
        margin-top: 10px;
    `,
};

export default Complete;
