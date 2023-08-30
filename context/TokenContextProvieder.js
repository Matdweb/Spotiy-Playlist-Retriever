'use client'
import { createContext, useState } from "react"

export const tokenContext = createContext();

function TokenContextProvieder(props) {
    const [accessToken, setAccessToken] = useState(null);
  return (
    <tokenContext.Provider value={{accessToken,setAccessToken}}>
        {props.children}
    </tokenContext.Provider>
  )
}

export default TokenContextProvieder