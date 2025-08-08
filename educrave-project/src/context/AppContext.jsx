import { createContext } from 'react';
export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const value = {
        // Add shared state or functions here
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
}
