import React from "react";

const InputForm = ({ label = "dummy", type = "" }) => {
    return (
        <>
            <h2>{label}</h2>
            <input
                name={type}
                type={type}
                placeholder={type}
                style={{ height: "30px", width: "300px" }}
            />
        </>
    );
};

export default InputForm;
