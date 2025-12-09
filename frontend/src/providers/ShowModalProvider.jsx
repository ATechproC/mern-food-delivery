import React, { createContext, useContext, useState } from 'react'

const ShowModelContext = createContext({});

const ShowModalProvider = ({ children }) => {

    const [isShow, setIsShow] = useState(false);

    const value = {
        isShow, setIsShow
    }

    return <ShowModelContext.Provider value={value} >
        {children}
    </ShowModelContext.Provider>
}

export default ShowModalProvider;

export const useShowModal = () => {
    return useContext(ShowModelContext)
};