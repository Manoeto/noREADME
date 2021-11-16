
import React, {createContext, useState} from 'react';
import reactDom from 'react-dom';
import {UserProvider} from './UserContext'

export const UserContext = createContext()

export const UserProvider = ({children}) =>{
  const [name, setName] = useState("Manoel")
  const [location, setLocation] = useState("Muilheim")
}


function App() {
  return (
    <UserContext.Provider value={{name,
      location,
      setName,
      setLocation}}>
        {children}
        </UserContext.Provider>
  );
}

export default App;