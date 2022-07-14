import React, { useRef, useState } from "react";
import { css } from "@emotion/react";
import NavBar from "../ui/navbar/NavBar";
import InputForm from "../ui/form/InputForm";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const Login = () => {
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
                setTimeout(() => setMiss(false), 2000)
            }
        );
    };
    // 参考資料 : https://qiita.com/niusounds/items/829780bdc45d34b4d1e7
    return (
        <>
            <NavBar title="Road-Map (試作品)" />
            <div>
                <h1>ログイン</h1>
                <form onSubmit={handleSubmit}>
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
                    <input type="submit" />
                </form>
                {miss && (
                    <p css={missMessage}>
                        メールアドレス、またはパスワードが正しくありません
                    </p>
                )}
            </div>
        </>
    );
};

const missMessage = css`
    color: red;
`;

export default Login;
