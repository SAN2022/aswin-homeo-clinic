const services = [
  "Hair & Skin Treatments",
  "Ear Nose Throat",
  "Skin Problems",
  "Pediatric & General Health",
  "Allergy & Immunology",
  "Specialized Care",
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}