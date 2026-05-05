import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Navbar() {
    const context = useContext(ThemeContext);

    if (!context) return null;

    const {theme, setTheme} = context;

    return (
        <nav className="flex items-center justify-between py-6 border-b border-white/10">
            <h1 className="text-lg font-semibold text-purple-400">
                {"</>"} Mallikarjun 
            </h1>

            <div className="hidden md:flex gap-8 text-sm text-gray-400">
                <a className="text-purple-400">Home</a>
                <a>About</a>
                <a>Projects</a>
                <a>Experience</a>
                <a>Skills</a>
                <a>Contact</a>
            </div>

            <div className="flex items-center gap-4">
                <button onClick = {() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 rounded-full border border-white/20">
                        ☀️
                </button>

                <button className="bg-purple-600 px-4 py-2 rounded-lg text-sm">
                        Download Resume 
                </button>
            </div>
        </nav>
    )
}