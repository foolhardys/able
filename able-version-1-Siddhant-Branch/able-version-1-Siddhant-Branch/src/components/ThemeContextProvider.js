import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [theme , setTheme] = useState(true);
  return (
    <ThemeContext.Provider value = {{theme , setTheme}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
