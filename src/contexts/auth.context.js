import { createContext, useContext, useState } from "react";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState({})

    return (
        <AuthContext.Provider
            value={{
                loggedInUser,
                setLoggedInUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)