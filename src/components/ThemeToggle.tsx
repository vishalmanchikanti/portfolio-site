import { useTheme } from "@/context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className="ml-4 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full px-1 py-1 cursor-pointer transition-all duration-300"
    >
      <div
        className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${
          theme === "dark"
            ? "translate-x-6 bg-black text-white"
            : "translate-x-0 bg-yellow-400 text-black"
        }`}
      >
        {theme === "dark" ? <FaMoon size={12} /> : <FaSun size={12} />}
      </div>
    </div>
  );
};

export default ThemeToggle;
