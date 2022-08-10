import React from "react";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
    return (
        <>
            <h2>{props.label}</h2>
            <input
                name={props.type}
                type={props.type}
                placeholder={props.type}
                style={{ height: "30px", width: "300px" }}
                ref={ref}
            />
        </>
    );
});

export default InputForm;
// 参考資料 : https://qiita.com/mori-dev@github/items/c7272975aaed017d96e7