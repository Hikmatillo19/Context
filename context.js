import { useState, createContext } from "react"
const Context = createContext()
function Provider({children}) {
    const {test, setTest} = useState()
  return (
    <Context.Provider value={{test, setTest}}>
        {children}
    </Context.Provider>
  )
}

export {Context, Provider}