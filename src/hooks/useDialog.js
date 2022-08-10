import { useState } from "react";

//ダイアログが開いているか閉じているかの初期値
const useDialog = (isOpen = false) => {
    const [open, setOpen] = useState(isOpen);

    const handleOpen = (e = undefined, func = () => undefined) => {
        if (typeof func === "function") {
            func();
        }
        setOpen(true);
    };

    const handleClose = (e = undefined, func = () => undefined) => {
        if (typeof func === "function") {
            func();
        }

        setOpen(false);
    };

    return { open, handleOpen, handleClose };
};

export default useDialog;
