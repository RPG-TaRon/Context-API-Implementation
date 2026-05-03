import { useTheme } from "../context/ThemeContext";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Venom" : "Spider-Man"} Mode
    </button>
  );
}

export default ThemeToggleButton;