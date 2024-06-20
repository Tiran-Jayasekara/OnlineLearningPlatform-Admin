"use client";
import React from 'react'
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
    const [token, setToken] = useState();

    useEffect(() => {
        const tokenI = localStorage.getItem("token");
        setToken(tokenI)
    }, [])

    return (
        <GlobalContext.Provider
            value={{
                token,
                setToken
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState