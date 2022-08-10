import React, { useRef, useState } from "react";
import { css } from "@emotion/react";
import Header from "../components/Header/Header";
import InputForm from "../components/Form/InputForm";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const SignIn = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const [miss, setMiss] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(
            (user) => {
                console.log(user);
                console.log(`${user.user.uid} : ログイン成功`);
                setMiss(false);
                navigate("/");
            },
            (err) => {
                console.log("ログインできませんでした");
                setMiss(true);
                setTimeout(() => setMiss(false), 2000);
            }
        );
    };
    // 参考資料 : https://qiita.com/niusounds/items/829780bdc45d34b4d1e7
    return (
        <>
            <Header title="Road-Map (試作品)" />
            <div>
                <h1 css={center}>ログイン</h1>
                <div css={form}>
                    <form onSubmit={handleSubmit} css={center}>
                        <InputForm
                            label="メールアドレス"
                            type="email"
                            ref={emailRef}
                        />
                        <InputForm
                            label="パスワード"
                            type="password"
                            ref={passwordRef}
                        />
                        <br />
                        <input type="submit" css={submit} value="ログイン" />
                        {miss && (
                            <p css={missMessage}>
                                メールアドレス、またはパスワードが正しくありません
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};

const missMessage = css`
    color: red;
`;

const form = css`
    margin: auto;
`;

const submit = css`
    height: 50px;
    width: 200px;
    margin: 20px auto;
`;

const center = css`
    text-align: center;
`;

export default SignIn;
