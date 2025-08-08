import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Moon,
  Sun,
  ChevronsLeftRightEllipsis as PageIcon,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    `block text-lg font-semibold transition ${
      (location.pathname === "/" && path === "/home") ||
      location.pathname === path
        ? "text-purple-500 dark:text-purple-500 underline underline-offset-4"
        : "text-gray-800 dark:text-gray-100 hover:text-purple-500 dark:hover:text-purple-500"
    }`;

  return (
    <header className="fixed top-0 right-0 left-0 flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-800 shadow-md z-50 transition-colors duration-200">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold text-purple-500 dark:text-purple-500">
        <PageIcon size={32} />
      </div>

      {/* Menu Desktop */}
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

      {/* Botões à direita */}
      <div className="flex items-center gap-4">
        {/* Botão de modo noturno (desktop) */}
        <button
          type="button"
          onClick={toggleDarkMode}
          className="hidden md:block text-gray-800 dark:text-gray-100 hover:text-purple-500 dark:hover:text-purple-500 transition duration-300"
        >
          {darkMode ? (
            <Sun className="transition-transform duration-300 rotate-180" />
          ) : (
            <Moon className="transition-transform duration-300 rotate-0" />
          )}
        </button>

        {/* Botão de menu mobile */}
        <button
          type="button"
          className="md:hidden text-gray-800 dark:text-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X
              size={28}
              className="transition-transform duration-300 rotate-90"
            />
          ) : (
            <Menu size={28} className="transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Menu Mobile (off-canvas) */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white dark:bg-gray-900 z-50 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-6">
          <Link
            to="/home"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass("/home")}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass("/about")}
          >
            Sobre Mim
          </Link>
          <Link
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass("/projects")}
          >
            Projetos
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass("/contact")}
          >
            Contatos
          </Link>

          {/* Botão de modo noturno (mobile) */}
          <button
            type="button"
            onClick={toggleDarkMode}
            className="mt-6 text-gray-800 dark:text-gray-100 hover:text-purple-500 dark:hover:text-purple-500 transition duration-300"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </nav>
      </div>
    </header>
  );
}
