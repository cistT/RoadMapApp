import React, { createContext, useEffect, useState, useContext } from "react";
import { auth } from "../config/firebase";

const AuthContext = createContext();

const useAuthContext = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unSubscribed = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unSubscribed();
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthContext;
export { useAuthContext, AuthProvider };
