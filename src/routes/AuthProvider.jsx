import React, { useMemo } from "react";

const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback) {
      console.log("ca",callback)
      fakeAuthProvider.isAuthenticated = true;
      setTimeout(callback, 100); // fake async
    },
    signout(callback) {
      fakeAuthProvider.isAuthenticated = false;
      setTimeout(callback, 100);
    },
  };
  
  export { fakeAuthProvider };

export const AuthContext = React.createContext();
export function AuthProvider({ children }) {
    const [user, setUser] = React.useState(null);
  
    const signin = (newUser, callback) =>  {
      fakeAuthProvider.isAuthenticated= true
        setUser(newUser);
        callback();
      };
  
    const signout = ()=>(callback) => {
      fakeAuthProvider.isAuthenticated = false
      setUser(null);
        callback();
      }
      const value = useMemo(()=>({ user, signin, signout }),[user])
      console.log("1 auth provider value", user)
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }
  

  