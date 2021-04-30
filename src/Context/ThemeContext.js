import React, {createContext, useState, useEffect} from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider  = (props) => {

    // const initialState = {
    //     isLightTheme : true,
    //     light : {
    //         syntax : '#555',
    //         ui : '#ddd',
    //         bg : '#eee'
    //     },
    //     dark : {
    //         syntax : '#ddd',
    //         ui : '#333',
    //         bg : '#555'
    //     } 
    // }
    const [isLightTheme, setIsLightTheme] = useState(true);
    const [light, setLight] = useState({});
    const [dark, setDark] = useState({})

    useEffect(()=> {
        // setIsLightTheme(false);
        setLight({syntax : '#555', ui : '#ddd', bg : '#eee' });
        setDark({syntax : '#ddd', ui : '#333', bg : '#555' })

    },[])
   const handleToggle = () => {
        setIsLightTheme(prev => !prev);
   } 
    
    return(
        <>

        <ThemeContext.Provider value={{isLightTheme, light, dark, handleToggle}}>
            {props.children}
        </ThemeContext.Provider>
        </>
    )

}

export {ThemeContextProvider}