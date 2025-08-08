
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, ChevronsLeftRightEllipsis as PageIcon } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <header className="fixed top-0 right-0 left-0 flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-800 shadow-md">
      <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        <PageIcon size={32} />
      </div>

      <nav className="space-x-6 hidden md:flex">
        <Link
          to="/home"
          className="font-semibold text-gray-800 dark:text-gray-100 hover:underline"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-semibold text-gray-800 dark:text-gray-100 hover:underline"
        >
          Sobre Mim
        </Link>
        <Link
          to="/projects"
          className="font-semibold text-gray-800 dark:text-gray-100 hover:underline"
        >
          Projetos
        </Link>
        <Link
          to="/contact"
          className="font-semibold text-gray-800 dark:text-gray-100 hover:underline"
        >
          Contatos
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={toggleDarkMode}
          className="text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-600 transition duration-300"
        >
          {darkMode ? (
            <Sun className="transition-transform duration-300 rotate-180" />
          ) : (
            <Moon className="transition-transform duration-300 rotate-0" />
          )}
        </button>
      </div>
    </header>
  );
}
