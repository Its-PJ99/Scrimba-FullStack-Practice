import React from "react"
import Header from "./Header"
import Button from "./Button"

const ThemeContext = React.createContext()

export default function App() {
    const [theme, setTheme] = React.useState("light")

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }
    
    /**
     * Final challenge:
     * 1. Update the div below with the className that uses the 
     *    `theme` value from state
     * 2. Add back the onClick handler in our Button component to
     *    use the `toggleTheme` function we're passing down via context
     */
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="container dark-theme">
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
    )
}

export { ThemeContext }