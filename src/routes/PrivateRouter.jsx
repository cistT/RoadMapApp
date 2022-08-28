import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

const PrivateRouter = ({ element }) => {
    const user = useAuthContext();

    return user ? <>{element}</> : <Navigate to="/signin" />;
};

export default PrivateRouter;
