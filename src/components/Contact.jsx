import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contactus" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-8">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="w-full h-64 md:h-96">
            {/* <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              className="w-full h-full border-0 rounded-lg"
              allowFullScreen
              loading="lazy"
            ></iframe> */}

            <iframe 
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.034835800884!2d78.69489227401756!3d10.808643858600718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50377f5d54d%3A0x951883f224cf143c!2sParupukkara%20St%2C%20Palakarai%2C%20Sangillyandapuram%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620001!5e0!3m2!1sen!2sin!4v1756389332787!5m2!1sen!2sin" 
              className="w-full h-full border-0 rounded-lg"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-4">
            <p className="flex items-center text-gray-700">
              <FaMapMarkerAlt className="mr-2 text-green-600" /> 123, Paruppukara Street, Palakkarai, Trichy - 620 001
            </p>
            <p className="flex items-center text-gray-700">
              <FaPhone className="mr-2 text-green-600" /> +91 97883 38496
            </p>
            <p className="flex items-center text-gray-700">
              <FaEnvelope className="mr-2 text-green-600" /> info@homeocare.com
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.youtube.com/@dr.shanthikrishnaraguaswin2119" target="_blank" className="text-green-600 hover:text-green-800"><FaYoutube size={24} /></a>
              <a href="https://www.facebook.com/profile.php?id=100009240947955" target="_blank" className="text-green-600 hover:text-green-800"><FaFacebook size={24} /></a>
              <a href="https://www.instagram.com/dr.shanthikrishnaragu/" target="_blank" className="text-green-600 hover:text-green-800"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
