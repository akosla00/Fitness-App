import { createContext, useState, useContext, useEffect } from 'react';
import Auth from './auth'
export const LoginContext = createContext();

export const useLoginContext = () => useContext(LoginContext);

const LoginProvider = (children) => {

    const [loggedIn, setLoggedIn] = useState(false)

    const isLoggedIn = Auth.loggedIn();

    console.log(isLoggedIn);
    

    useEffect(() => {
        setLoggedIn(isLoggedIn)
    }, [isLoggedIn])

    return (
        <LoginContext.Provider value={{ loggedIn, setLoggedIn }} {...children} />
    );
};

export default LoginProvider;
