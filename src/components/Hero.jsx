import { useState, useEffect } from "react";
import img1 from '../assets/01.jpg'
import img2 from '../assets/02.jpg'
import img3 from '../assets/03.jpg'

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
    <section id="home" className="relative h-screen flex items-center justify-center">
      <img
        src={slides[current].img}
        alt="homeopathy"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <h2 className="text-3xl z-1 md:text-5xl font-bold text-white text-center px-6">
        {slides[current].text}
      </h2>
    </section>
  );
}
