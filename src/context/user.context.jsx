import {createContext} from 'react';
import { useState } from 'react';

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({children})=>{


    const [userId, setUserid] = useState(11); 


    return <UserContext.Provider value={{userId, setUserid}}>
            {children}
    </UserContext.Provider>;
    
};



