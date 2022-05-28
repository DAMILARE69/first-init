//@ts-check
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer } from "react";
import { auth } from "../../../Config/Firebase/Firebase";
import { authReducer, authState } from "../../Reducer/AuthReducer/AuthReducer";

export const AuthContext = createContext({
  authState,
  login: null,
  signup: null,
  resetPassword: null,
  signout: null
});
export function AuthContextProvider({ children }) {
  const [authStates, dispath] = useReducer(authReducer, authState);
  const signup = () => {
    //signup Logic
  };
  const login = () => {
    //login Logic
  };
  const signout = () => {
    //signout Logic
  };
  const resetPassword = () => {
    //resetPassword Logic
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (userCredentials) => {
      // @ts-ignore
      dispath({ type: "Make_Auth_Ready", payload: userCredentials });
    });
    return unSubscribe;
  }, []);
  return (
    <AuthContext.Provider
      value={{
        ...authStates
      }}>
      {children}
    </AuthContext.Provider>
  );
}
