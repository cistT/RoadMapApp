import React from "react";
import Header from "components/Header/Header";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <Header />
            <h2>Error 404:ページが見つかりませんでした</h2>
            <div>
                <Link to="/signin">ログインページに戻る</Link>
            </div>
        </>
    );
};

export default Error;
