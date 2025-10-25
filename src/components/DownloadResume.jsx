import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

function DownloadResume() {
  const [showButton, setShowButton] = useState(false);

  //detect when user scroll down
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY + window.innerHeight;

      if (scrollTop >= scrollHeight * 0.8) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showButton && (
      <a
        href="/Narasimha M_Resume.pdf"
        download
        className="fixed bottom-6 right-6 bg-gray-600 text-gray-300 p-4 rounded-full shadow-lg hover:bg-gray-400 transition-all duration-300 animate-bounce"
        title="Download Resume"
      >
        <FaDownload size={22} />
      </a>
    )
  );
}

export default DownloadResume;
