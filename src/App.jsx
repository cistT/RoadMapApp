import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRouter from "./routes/PrivateRouter";
import { AuthProvider } from "./routes/AuthContext";

import Home from "./page/Home";
import SignIn from "./page/SignIn";
import Error from "./page/Error";

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<PrivateRouter element={<Home />} />}
                    />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
// 参考資料 : https://reffect.co.jp/react/react-firebase-auth#PrivateRoute
