import React from "react";

const TextWithTitle = ({ title, text = "" }) => {
    return (
        <div
            style={{
                width: "40vw",
                border: "0.5px dashed black",
                margin: "10px",
                padding: "5px",
            }}
        >
            <div
                style={{
                    fontSize: "20px",
                    color: "black",
                    fontWeight: "bold",
                    marginBottom: "5px",
                }}
            >
                {title}
            </div>
            <div style={{ fontSize: "16px", color: "black" }}>{text}</div>
        </div>
    );
};

export default TextWithTitle;
