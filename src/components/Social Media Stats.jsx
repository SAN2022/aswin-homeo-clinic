import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

const stats = [
  { platform: "Youtube", value: 13000, label: "Subscribers", icon: <FaYoutube className="text-red-500" /> },
  { platform: "Facebook", value: 9000, label: "Followers", icon: <FaFacebook className="text-blue-600" /> },
  { platform: "Instagram", value: 750, label: "Followers", icon: <FaInstagram className="text-pink-500" /> },
];

const Counter = ({ target }) => {
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    controls.start({
      val: target,
      transition: { duration: 2, ease: "easeOut" },
    });
  }, [target, controls]);

  return (
    <motion.span
      animate={controls}
      initial={{ val: 0 }}
      onUpdate={(latest) => setCount(Math.floor(latest.val))}
    >
      {count.toLocaleString()}+
    </motion.span>
  );
};

export default function SocialMediaStats() {
  return (
    <section className="py-16 bg-gray-50" id="social">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-8">
          Our Social Media Presence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <div className="text-2xl font-bold text-gray-800">
                <Counter target={item.value} />
              </div>
              <p className="text-gray-600">{item.platform} {item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
