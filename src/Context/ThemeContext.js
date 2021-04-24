import React, {createContext, useState} from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider  = () => {

    const [isLightTheme, setIsLightTheme] = useState(true);
    const [light, setLight] = useState({syntax : '#555',
                                        ui : '#ddd',
                                        bg : '#eee'  });
    const [dark, setDark] = useState({syntax : '#ddd',
                                      ui : '#333',
                                      bg : '#555'  })
    return(
        <>
        </>
    )

}

export {ThemeContextProvider}