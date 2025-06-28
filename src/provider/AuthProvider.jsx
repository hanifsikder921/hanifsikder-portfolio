import React, { createContext } from 'react';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    // All Coder Write Here then Share Auth Data

    const authData={

    }

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
};

export default AuthProvider;