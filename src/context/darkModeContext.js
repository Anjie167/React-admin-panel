import { createContext, useReducer, useContext } from "react"
import DarkModeReducer from "./darkModeReducer"


const INITIAL_STATE = {
    darkMode: false,
};

export const DarkModeContext = createContext({darkMode: INITIAL_STATE.darkMode, dispatch: (type)=>{}})

export const DarkModeContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

    return (
        <DarkModeContext.Provider value={{darkMode: state.darkMode, dispatch}}>
            {children}
        </DarkModeContext.Provider>
    );
}

export const useDarkModeContext = () => {
      return useContext(DarkModeContext);
 };


