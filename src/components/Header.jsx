import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, ChevronsLeftRightEllipsis as PageIcon } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

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

  const navLinkClass = (path) =>
    `font-semibold transition ${
      (location.pathname === "/" && path === "/home") ||
      location.pathname === path
        ? "text-purple-500 dark:text-purple-500 underline underline-offset-4"
        : "text-gray-800 dark:text-gray-100 hover:text-purple-500 dark:hover:text-purple-500"
    }`;

  return (
    <header className="fixed top-0 right-0 left-0 flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-800 shadow-md z-50 transition-colors duration-200">
      <div className="flex items-center gap-2 text-2xl font-bold text-purple-500 dark:text-purple-500">
        <PageIcon size={32} />
      </div>

      <nav className="space-x-6 hidden md:flex">
        <Link to="/home" className={navLinkClass("/home")}>
          Home
        </Link>
        <Link to="/about" className={navLinkClass("/about")}>
          Sobre Mim
        </Link>
        <Link to="/projects" className={navLinkClass("/projects")}>
          Projetos
        </Link>
        <Link to="/contact" className={navLinkClass("/contact")}>
          Contatos
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={toggleDarkMode}
          className="text-gray-800 dark:text-gray-100 hover:text-purple-500 dark:hover:text-purple-500 transition duration-300"
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
