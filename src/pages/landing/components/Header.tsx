import { useState, useEffect } from "react";
import { Me } from "../../../data/header";
import { Github, MapPin, FileText, Mail, Moon, Sun } from "lucide-react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const viewGithub = () => {
    if (Me.github) {
      window.open(Me.github, "_blank");
    }
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    // CHANGED: 'items-stretch' -> 'items-center' to stop text height from squishing the image
    <div className="flex flex-row items-center md:justify-between gap-3 md:gap-8 p-4 md:py-8 mt-2 md:mt-8">
      {/* Picture */}
      {/* CHANGED: Added 'aspect-square' to force a 1:1 ratio so it never squishes */}
      <div className="rounded-lg overflow-hidden w-33 sm:w-36 md:w-56 aspect-square relative shrink-0">
        <img
          src={Me.picture}
          alt="Ako Rani"
          // CHANGED: Added 'object-top' to ensure the face is never cut off
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>

      <div className="flex flex-col justify-center flex-3 text-left py-2 min-w-0">
        <div className="flex flex-row items-center gap-1 sm:gap-2 w-full pr-1">
          <h1 className="font-sans text-[14px] sm:text-xl md:text-4xl font-bold text-gray-700 dark:text-gray-100 truncate min-w-0">
            {Me.name}
          </h1>
          <img
            src={Me.verified}
            alt="Verified"
            className="w-3 h-3 sm:w-6 sm:h-6 shrink-0 ml-0.5"
          />
          <button
            onClick={toggleDarkMode}
            className={`ml-auto relative inline-flex h-5 w-9 sm:h-8 sm:w-14 shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-offset-2 dark:focus:ring-offset-gray-900 cursor-pointer ${
              isDarkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
            aria-label="Toggle Dark Mode"
          >
            <span className="sr-only">Toggle dark mode</span>
            <span
              className={`z-10 flex h-3.5 w-3.5 sm:h-6 sm:w-6 items-center justify-center transform rounded-full bg-white transition-transform duration-300 ${
                isDarkMode
                  ? "translate-x-4.5 sm:translate-x-7"
                  : "translate-x-1"
              }`}
            >
              {isDarkMode ? (
                <Moon
                  className="text-gray-700 w-2.5 h-2.5 sm:w-auto sm:h-auto"
                  size={14}
                />
              ) : (
                <Sun
                  className="text-gray-700 w-2.5 h-2.5 sm:w-auto sm:h-auto"
                  size={14}
                />
              )}
            </span>
          </button>
        </div>

        <p className="font-sans text-[11px] sm:text-sm md:text-base font-semibold text-gray-500 dark:text-gray-400 mt-3 md:mt-4 leading-tight">
          <MapPin className="inline mb-0.5 sm:mb-1 mr-1 md:mr-2" size={14} />
          {Me.location}
        </p>

        <p className="font-sans text-[11px] sm:text-sm md:text-base text-gray-600 dark:text-gray-300 font-bold leading-tight mt-2 md:mt-3">
          {Me.role}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-2 md:gap-4 w-full mt-4 sm:mt-5 md:mt-6">
          <button className="flex items-center justify-center font-sans bg-[#3a4149] text-white font-semibold py-1 sm:py-1 md:py-1.5 rounded text-[10px] sm:text-xs transition-all duration-200 hover:-translate-y-1 cursor-pointer">
            <FileText className="mr-1 sm:mr-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5" />
            View Resume
          </button>
          <button
            className="flex items-center justify-center font-sans bg-[#1a1f24] text-white font-semibold py-1 sm:py-1 md:py-2.5 rounded text-[10px] sm:text-xs transition-all duration-200 hover:-translate-y-1 cursor-pointer"
            onClick={viewGithub}
          >
            <Github className="mr-1 sm:mr-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5" />
            Visit GitHub
          </button>
          <button className="col-span-2 md:col-span-1 flex items-center justify-center font-sans font-semibold bg-white dark:bg-[#1a1f24] dark:text-white shadow-md text-gray-800 py-1 sm:py-1 md:py-1.5 rounded text-[10px] sm:text-xs transition-all duration-200 hover:-translate-y-1 cursor-pointer">
            <Mail className="mr-1 sm:mr-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5" />
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
