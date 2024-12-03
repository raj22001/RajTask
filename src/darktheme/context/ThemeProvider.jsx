import React, { createContext, useState } from 'react'

export const ThemeContext = createContext(null);

const ThemeProvider = ({children}) => {

    const [toggleTheme , setToggleTheme ] = useState(false)

    const handlerTheme = () => {
        setToggleTheme(!toggleTheme)
    }

  return (
    <ThemeContext.Provider value={{toggleTheme , handlerTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}



export default ThemeProvider
