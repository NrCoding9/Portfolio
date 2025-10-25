import React, { useEffect, useState } from "react";

function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.getElementById("introduction");
      if (!introSection) return;

      const rect = introSection.getBoundingClientRect();

      //when user scrolls past the intro section bottom
      if (rect.bottom < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full backdrop-blur-md bg-slate-800/40 text-gray-200 shadow-md transition-all duration-500 ease-in-out z-50 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-3 max-w-6xl mx-auto">
        <div>
          <a
            href="#top"
            className="hover:text-blue-400 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <h1 className="text-xl font-bold">Narasimha M</h1>
            <p className="text-sm">Front End Developer</p>
          </a>
        </div>
        <nav className="space-x-6">
          <a
            href="#experience"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}

export default StickyHeader;
