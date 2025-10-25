
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function ScrollIndicator() {

    const [showIndicator, setShowIndicator] = useState(true);

  const scrollToNext = () => {
    const next = document.getElementById("about");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() =>{

    const handleScroll = () =>{
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        //hide indicator if near bottom
        if(scrollTop + windowHeight >= docHeight - 100){
            setShowIndicator(false)
        }else{
            setShowIndicator(true)
        }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  },[])

  if(!showIndicator) return null;

  return (
    <div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      onClick={scrollToNext}
    >
      <FaChevronDown className="animate-bounce text-white text-2xl" />
    </div>
  );
}


export default ScrollIndicator;