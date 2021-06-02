import React from 'react'

export const themes = {
    normal: {
        darkGrey: "#000000", 
        lightGrey: "#131412", 
        red: "#D31251", 
    },
    alternate: {
        darkGrey: "#000000", 
        lightGrey: "#131412", 
        red: "blue", 
    }
}

export const ThemeContext = React.createContext({
    theme: themes.normal,
    setTheme: () => {}
})