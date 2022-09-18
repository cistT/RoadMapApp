import React from "react";
import { css } from "@emotion/react";

import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";

import useDialog from "hooks/useDialog";

const ImageDialog = ({ imgUrl, images, index }) => {
    const { open, handleOpen, handleClose } = useDialog(false);

    const [currentImage, setCurrentImage] = React.useState(index);

    const onClickRight = () => {
        setCurrentImage((pre) => pre + 1);
    };

    const back = () => {
        setCurrentImage((pre) => pre - 1);
    };

    return (
        <>
            <img
                src={imgUrl}
                css={styles.previewImg}
                alt=""
                onClick={handleOpen}
            />
            <Dialog
                maxWidth="xl"
                css={styles.dialog}
                onClose={(_) => handleClose(_, () => setCurrentImage(index))}
                open={open}
            >
                <div css={styles.bar}>
                    <IconButton
                        color="inherit"
                        css={styles.icon}
                        onClick={(_) =>
                            handleClose(_, () => setCurrentImage(index))
                        }
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogTitle>画像</DialogTitle>
                </div>
                <div css={styles.container}>
                    {currentImage > 0 ? (
                        <Button css={styles.button} onClick={back}>
                            <ArrowBackIosIcon />
                        </Button>
                    ) : (
                        <div css={styles.button}></div>
                    )}
                    <img src={images[currentImage]} alt="" css={styles.img} />
                    {currentImage < images.length - 1 ? (
                        <Button css={styles.button} onClick={onClickRight}>
                            <ArrowForwardIosIcon />
                        </Button>
                    ) : (
                        <div css={styles.button}></div>
                    )}
                </div>
            </Dialog>
        </>
    );
};

export default ImageDialog;

const styles = {
    previewImg: css`
        height: 400px;
        width: 49.5%;
        object-fit: contain;
        zoom: 0.4;
        object-position: 50% 50%;
        border: 0.5px black solid;
        cursor: pointer;
        ${"" /* margin: 3px; */}
    `,
    icon: css`
        margin-left: 10px;
    `,
    bar: css`
        display: flex;
    `,
    container: css`
        width: 100%;
        display: flex;
        justify-content: center;
    `,
    button: css`
        width: 3%;
    `,
    img: css`
        height: auto;
        max-width: 85%;
        margin: 20px;
    `,
};
