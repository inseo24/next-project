import { useContext } from 'react';
import Link from 'next/link';
import ThemeContext from './ThemeContext';

function Navbar() {
    const { toggleTheme, theme } = useContext(ThemeContext);
    const newThemeName = theme === 'dark' ? 'light' : 'dark';

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 25,
                marginTop: 25,
            }}
        >
            <div>My Website</div>
            <div>
                <Link href="/">Home</Link>
                <span style={{ marginRight: 10 }}></span>
                <Link href="/about">About</Link>
                <span style={{ marginRight: 10 }}></span>
                <Link href="/contacts-me">Contact</Link>
                <span style={{ marginRight: 10 }}></span>
                <button onClick={toggleTheme}>Set {newThemeName} Theme</button>
            </div>
        </div>
    );
}

export default Navbar;