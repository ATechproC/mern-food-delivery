import React, {createContext, useContext, useState} from 'react';

const AppContext = createContext({});

const AppProvider = ({ children }) => {

    const [counterNotification, setCounterNotification] = useState(0);

    const value = {
        counterNotification,
        setCounterNotification
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppProvider;

export const useAppProvider = () => useContext(AppContext);