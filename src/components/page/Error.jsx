import React from "react";
import NavBar from "../ui/navbar/NavBar";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <NavBar />
            <h2>Error 404:ページが見つかりませんでした</h2>
            <div>
                <Link to="/signin">ログインページに戻る</Link>
            </div>
        </>
    );
};

export default Error;
