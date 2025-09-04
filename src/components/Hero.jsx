import { useState, useEffect } from "react";
import img1 from "../assets/01.jpg";
import img2 from "../assets/02.jpg";
import img3 from "../assets/03.jpg";

const slides = [
  { img: img1, text: "Healing starts with Homeopathy" },
  { img: img2, text: "Gentle care for lasting relief" },
  { img: img3, text: "Natural solutions for your health" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[60vh] sm:h-[70vh] md:h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images with fade animation */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.img}
          alt="homeopathy"
          className={`absolute inset-0 w-full h-full object-cover brightness-75 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Text with fade */}
      <h2
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center px-6 drop-shadow-lg transition-opacity duration-1000 ease-in-out"
        key={current} // re-trigger fade when text changes
      >
        {slides[current].text}
      </h2>
    </section>
  );
}
