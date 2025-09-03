import { useState, useEffect } from "react";

const testimonials = [
  { name: "Ramya", text: "I have uterus problem. Consult this doctor through phone call because I’m in overseas. We’ll appreciate her treatment and service.I had pleasant experience" },
  { name: "Sangeetha", text: "Treatment was good. Doctor way of consultation to the patient is very easy to understand and Best👍🏼" },
  { name: "Ulaganathan", text: "நன்றாக உள்ளது. இந்த மருந்து மிக அருமையாக வேலை செய்கிறது." },
  { name: "George", text: "Very good service. Excellent treatment for all diseases. God bless them!"},
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % testimonials.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="h-90 py-16 bg-green-50 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-8">What Patients Say</h2>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 mb-4 italic">"{testimonials[current].text}"</p>
        <h3 className="font-semibold text-green-600">- {testimonials[current].name}</h3>
      </div>
    </section>
  );
}
