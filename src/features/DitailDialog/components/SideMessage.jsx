import React, { useState, useContext } from "react";

import { css } from "@emotion/react";

import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";

import { ImageUrl } from "../../../page/Home";
import SendMessage from "./SideMessage/SendMessage";
import Images from "./SideMessage/Images";
import SendImage from "./SideMessage/SendImage";
import GroupOrientation from "../../../components/Button/GroupOrientation";

import useFetchImages from "../../../hooks/useFetchImages";
import dateToString from "utils/dateToString";
import { useEffect } from "react";

//ToDo コンポーネントの名前を変える
const SideMessage = ({ mapData, dbMessages }) => {
    const imgUrl = useContext(ImageUrl);

    const [menu, setMenu] = useState(0);
    const selectMenu = (i) => setMenu(i);

    const [imgs, _] = useFetchImages(imgUrl, mapData.id);

    // 最新のメッセージを表示する処理（一番下にスクロール済みの状態にする）
    // 参考サイト : https://teratail.com/questions/302384

    // useEffect(() => {
    //     console.log("スクロール！！！");
    //     window.scrollTo(10000, 0);
    // }, []);

    return (
        <div css={styles.container}>
            <div css={styles.sendBox}>
                <GroupOrientation menu={menu} selectMenu={selectMenu} />
                {menu === 0 && (
                    <div css={styles.messageList}>
                        {dbMessages.map((message) => (
                            <div css={styles.listItem}>
                                <div css={styles.messageData}>
                                    <span css={styles.messageManager}>
                                        {message?.manager ?? "不明"}
                                    </span>
                                    <span css={styles.messageTimestamp}>
                                        {dateToString(
                                            message?.timestamp?.toDate()
                                        ) ?? "不明"}
                                    </span>
                                </div>
                                <div css={styles.messageText}>
                                    {message.message}
                                </div>
                                <hr/>
                            </div>

                        ))}
                    </div>
                )}
                {menu === 1 && (
                    <Images
                        mapDataId={mapData.id}
                        imgUrl={imgUrl}
                        images={imgs}
                    />
                )}
            </div>

            {menu === 0 && <SendMessage mapDataId={mapData.id} />}
            {menu === 1 && <SendImage mapDataId={mapData.id} />}
        </div>
    );
};
export default SideMessage;

const styles = {
    container: css`
        width: 50vw;
        height: 60vh;
    `,
    sendBox: css`
        display: flex;
        width: 100%;
    `,
    messageList: css`
        width: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        max-height: 53.5vh;
        border: 1px solid;
    `,
    listItem: css`
        gap: 20px;
        border-radius: 5px;
        padding-bottom: 5px;
        margin-bottom: 5px;
    `,
    messageText: css`
        margin-left: 20px;
    `,
    messageData: css`
        width: 100%;
        display: flex;
    `,
    messageManager: css`
        font-weight: bold;
        margin-left: 5px;
        width: 7vw;
        font-size: 12px;
    `,
    messageTimestamp: css`
        font-size: 12px;
    `,
};

//https://mui.com/material-ui/react-text-fiel
