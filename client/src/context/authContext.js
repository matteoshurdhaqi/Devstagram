import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
        //TODO
        setCurrentUser({
            id: 1,
            firstname: "Eric Cartman",
            profilePic: "https://static.miraheze.org/greatcharacterswiki/thumb/0/02/The-coon_.png/300px-The-coon_.png"
        })
    }

    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(currentUser))  //you cannot store objects in localstorage
    }, [currentUser])

    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
}