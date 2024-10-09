// src/UserContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the UserContext
const UserContext = createContext();

// Create a custom hook to use the UserContext
export const useUser = () => {
    return useContext(UserContext);
};

// Create the UserProvider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: '', email: '' });

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser({ name: '', email: '' });
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
