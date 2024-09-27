import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import SignUp from "../pages/Signup";
import { loginUser } from "../helpers/api-communicator";

type user = {
  name: string;
  email: string;
};

type userAuth = {
  isLoggedIn: boolean;
  user: user | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<userAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<user | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    //fetch is user's cookies are validf then skip login
  }, []);
  const login = async (email: string, password: string) => {
    const data = await loginUser(email,password)
    if (data) {
      setUser({email: data.email, name: data.name})
      setIsLoggedIn(true)
    }
  };
  const signup = async (name: string, email: string, password: string) => {};
  const logout= async()=>{}

  const value = {
    user,
    isLoggedIn,
    login,
    logout,
    signup
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export const useAuth = () => useContext(AuthContext);