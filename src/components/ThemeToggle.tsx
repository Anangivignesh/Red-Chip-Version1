import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("dark")

    useEffect(() => {
        // Check system preference or stored theme
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        const initialTheme = storedTheme || systemTheme

        setTheme(initialTheme)
        document.documentElement.classList.toggle("dark", initialTheme === "dark")
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.toggle("dark", newTheme === "dark")
    }

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
        >
            <Sun className={`h-5 w-5 transition-all ${theme === "dark" ? "scale-0 rotate-90" : "scale-100 rotate-0"}`} />
            <Moon className={`absolute top-2 left-2 h-5 w-5 transition-all ${theme === "dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90"}`} />
        </button>
    )
}
