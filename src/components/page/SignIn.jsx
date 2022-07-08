import React from "react";
import { css } from "@emotion/react";
import NavBar from "../ui/navbar/NavBar";
import InputForm from "../ui/form/InputForm";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <NavBar title="Road-Map (試作品)" />
            <div css={login}>
                <h2>ログイン</h2>
                <form onSubmit={() => {}}>
                    <InputForm label="メールアドレス" type="email" />
                    <InputForm label="パスワード" type="password" />
                    <input type="submit"/>
                </form>
            </div>
        </>
    );
};

const login = {
    login: css`
        display: flex;
    `,
};

export default Login;
