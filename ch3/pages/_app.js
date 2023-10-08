import Navbar from "../components/Navbar";
import { useState } from "react";
import ThemeContext from "../components/ThemeContext";

const themes = {
    light: {
        color: 'white',
        background: 'black'
    },
    dark: {
        background: 'white',
        color: 'black'
    },
};

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div
                style={{
                    width: '100%',
                    minHeight: '100vh',
                    ...themes[theme]
                }}>
                <Navbar />
                <Component {...pageProps} />
            </div>
        </ThemeContext.Provider>
    )
}

export default MyApp;