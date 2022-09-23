import { useState } from "react";

import { css } from "@emotion/react";

import { TextField } from "@mui/material";

import MapList from "./Incomplete/MapList";
import TitleRow from "../TitleRow";
import SelectSearchItem from "./SearchMenu/SelectSearchItem";
import SelectSortItem from "./SearchMenu/SelectSortItem";

const Incomplete = ({ mapData, dbMessages, saveDisplayMapIcons }) => {
    const [keyword, setKeyword] = useState("");
    const [searchItem, setSearchItem] = useState("respondent_name");
    const [sortItem, setSortItem] = useState("id");
    const [isAsc, setIsAsc] = useState(false);

    const changeMapIcons = (newKeyword) => {
        saveDisplayMapIcons(
            mapData.filter((data) => data[searchItem].includes(newKeyword))
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
                    <SelectSortItem
                        setSortItem={setSortItem}
                        isAsc={isAsc}
                        setIsAsc={setIsAsc}
                    />
                </div>
            </div>
            <TitleRow isAsc={isAsc} setIsAsc={setIsAsc} />
            {mapData.length === 0 ? (
                <div css={styles.message}>未完了のデータがありません</div>
            ) : mapData.filter((data) => data[searchItem].includes(keyword))
                  .length !== 0 ? (
                <MapList
                    mapData={mapData
                        .filter((data) => data[searchItem].includes(keyword))
                        .sort((a, b) =>
                            sortItem === "scheduled" || "timestamp"
                                ? isAsc
                                    ? new Date(a[sortItem]) -
                                      new Date(b[sortItem])
                                    : new Date(b[sortItem]) -
                                      new Date(a[sortItem])
                                : isAsc
                                ? a[sortItem] - b[sortItem]
                                : b[sortItem] - a[sortItem]
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

export default Incomplete;
