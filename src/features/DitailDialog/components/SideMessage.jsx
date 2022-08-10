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

//ToDo コンポーネントの名前を変える
const SideMessage = ({ mapData, dbMessages }) => {
    const imgUrl = useContext(ImageUrl);

    const [menu, setMenu] = useState(0);
    const selectMenu = (i) => setMenu(i);

    const [imgs, setImgs] = useFetchImages(imgUrl, mapData.id);

    return (
        <div style={{ width: "50vw" }}>
            <div css={style1}>
                <GroupOrientation menu={menu} selectMenu={selectMenu} />
                {menu === 0 && (
                    <div css={style}>
                        {dbMessages.map((message, i) => (
                            <ListItem key={i}>
                                <ListItemText primary={message.message} />
                            </ListItem>
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

const style = css`
    width: 80%;
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 400px;
    height: 400px;
    border: 1px solid;
`;

const style1 = css`
    display: flex;
    width: 100%;
`;

//https://mui.com/material-ui/react-text-fiel
