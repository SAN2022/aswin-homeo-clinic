import { FaPhoneAlt } from "react-icons/fa";

export default function BookAppointment() {
  return (
<section className="py-16 bg-gray-50 text-gray-900" id="appointment">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-700">
      Book an Appointment
    </h2>
    <p className="text-lg md:text-xl mb-6">
      Get personalized homeopathy treatment from our experienced doctor. <br/>
      Call us today to schedule your consultation.
    </p>

    <div className="flex items-center justify-center space-x-4">
      <FaPhoneAlt className="text-3xl md:text-4xl animate-pulse" />
      <a
        href="tel:+919876543210"
        className="text-2xl md:text-3xl font-bold hover:text-green-800 transition"
      >
        +91 98765 43210
      </a>
    </div>

    <p className="mt-4 text-sm md:text-base text-green-600">
      Available Mon – Sat: 9:00 AM – 7:00 PM
    </p>
  </div>
</section>

  );
}
