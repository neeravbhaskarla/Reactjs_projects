import React, {useState} from 'react'

const AuthContext = React.createContext({
    token:'',
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{}
})

const calucateRemainingTime=(expirationTime)=>{
    const currentTime = new Date().getTime()
    const adjExpirationTime = new Date(expirationTime).getTime()
    const remainingDuration = adjExpirationTime-currentTime
    return remainingDuration
}

export const AuthContextProvider = (props)=>{
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken)
    const userLoggedIn = !!token;
    
    const loginHandler=(token, expirationTime)=>{
        setToken(token)
        localStorage.setItem('token',token)
        const remainingTime = calucateRemainingTime(expirationTime)
        setTimeout(logoutHandler, remainingTime)
    }
    const logoutHandler = ()=>{
        setToken(null)
        localStorage.removeItem('token')
    }
    const contextValue = {
        token: token,
        isLoggedIn: userLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };

    return<AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}
export default AuthContext