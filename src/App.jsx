import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import SignIn from "./page/SignIn";
import Error from "./page/Error";
import PrivateRouter from "./routes/PrivateRouter";
import { AuthProvider } from "./routes/AuthContext";

const App = () => {
    return (
        // <AuthProvider>
        //     <BrowserRouter>
        //         <Routes>
        //             <Route
        //                 path="/"
        //                 element={<PrivateRouter element={<Home />} />}
        //             />
        //             <Route path="/signin" element={<SignIn />} />
        //             <Route path="*" element={<Error />} />
        //         </Routes>
        //     </BrowserRouter>
        // </AuthProvider>
        <Home />
    );
};

export default App;
// 参考資料 : https://reffect.co.jp/react/react-firebase-auth#PrivateRoute
