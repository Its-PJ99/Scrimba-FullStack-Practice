import React from "react"
import Header from "./Header"
import Button from "./Button"

const ThemeContext = React.createContext()

export default function App() {
    
    /**
     * Challenge part 1:
     * Add state to the App component. Default value === "light". 
     * Pass that state as the value to the context provider.
     */
    
    return (
        <ThemeContext.Provider value="light">
            <div className="container dark-theme">
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
    )
}

export { ThemeContext }