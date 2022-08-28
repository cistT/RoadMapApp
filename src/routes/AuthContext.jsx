import React, { createContext, useEffect, useState, useContext } from "react";

import { auth } from "../config/firebase";

import LoadingScreen from "page/LoadingScreen";

const AuthContext = createContext();

const useAuthContext = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unSubscribed = auth.onAuthStateChanged((user) => {
            setUser(user);
            setIsLoading(false);
        });
        return () => unSubscribed();
    }, []);
    if (isLoading) return <LoadingScreen />;
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthContext;
export { useAuthContext, AuthProvider };
