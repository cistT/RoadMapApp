import { useState } from "react";

import { css } from "@emotion/react";

import { TextField } from "@mui/material";

import AllList from "./All/AllList";
import TitleRow from "../TitleRow";
import SelectSearchItem from "./SearchMenu/SelectSearchItem";
import SelectSortItem from "./SearchMenu/SelectSortItem";

const All = ({ allMapData, dbMessages, saveDisplayMapIcons }) => {
    const [keyword, setKeyword] = useState("");
    const [searchItem, setSearchItem] = useState("respondent_name");

    const changeMapIcons = (newKeyword) => {
        saveDisplayMapIcons(
            allMapData.filter((data) => data[searchItem].includes(newKeyword))
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
            {allMapData === undefined ? (
                <div css={styles.message}>データがありません</div>
            ) : allMapData.filter((data) => data[searchItem].includes(keyword))
                  .length !== 0 ? (
                <AllList
                    allMapData={allMapData.filter((data) =>
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

export default All;
