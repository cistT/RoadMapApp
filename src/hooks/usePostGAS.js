import React from "react";

const usePostGAS = () => {
    const [data, setData] = React.useState({});
    React.useEffect(() => {
        if (data) {
            postData(process.env.REACT_APP_SPREADSHEET_API_URL, data);
        }
    }, [data]);
    return {
        postData: (data) => {
            if (data) {
                setData(data);
            }
        },
        post: (data) => {
            if (data) {
                postData(process.env.REACT_APP_SPREADSHEET_API_URL, data);
            }
        },
    };
};

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        redirect: "follow",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
};

export default usePostGAS;
