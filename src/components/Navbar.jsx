import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const links = ["Home", "About", "Services", "Testimonials", "Contact Us"];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="flex items-center text-2xl font-bold text-green-700 leading-none">
          <GiThreeLeaves className="mr-2 h-7 w-7" />
          Aswin Homeo Clinic
        </h1>

        {/* <h1 className="text-2xl font-bold text-green-700"><GiThreeLeaves className="inline-block"/> Aswin Homeo Clinic</h1> */}

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={`#${link.toLowerCase().replace(" ", "")}`}
                className="text-gray-700 hover:text-green-600 transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <div className="md:hidden ">
          <button onClick={() => setNavOpen(!navOpen)} className="cursor-pointer">
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {navOpen && (
        <ul className="md:hidden bg-white flex flex-col items-center space-y-4 py-6 shadow-lg">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={`#${link.toLowerCase().replace(" ", "")}`}
                className="text-gray-700 hover:text-green-600"
                onClick={() => setNavOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
