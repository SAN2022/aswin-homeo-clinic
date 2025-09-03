import doctor from '../assets/Doctor.jpg'

export default function About() {
  return (
    <section id="about" className="container mx-auto px-6 py-16 text-center">
      <img
        src={doctor}
        alt="Doctor"
        className="mx-auto w-40 h-40 rounded-full mb-6 shadow-lg"
      />
      <h2 className="text-2xl font-bold text-green-700 mb-4">Dr. Shanthi Krishna Ragu B.H.M.S, Msc(Psy)</h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        With 15+ years of experience in Homeopathy, Dr. Shanthi Krishna Ragu specializes in holistic 
        care for chronic and acute conditions, ensuring safe and natural treatments.
      </p>
    </section>
  );
}