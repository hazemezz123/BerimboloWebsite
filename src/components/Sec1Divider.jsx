import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Link2 } from "lucide-react";
const Divider = () => {
  return (
    <div className="mx-auto p-20 flex flex-col justify-center items-center bg-[#ddd] ">
      {/* Title */}
      <p className="text-center text-4xl text-gray-900 mb-10">
        About Our Company
      </p>
      {/* Animated Arrow */}
      <div className="animate-pulse">
        <FaArrowDown className="text-7xl text-center text-blue-500 animate-bounce" />
      </div>
      {/* Call to Action Button */}
      <Link to="/about">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white flex gap-2 font-bold py-4 px-6 rounded-full hover:bg-blue-500 transition-colors mt-8"
        >
          Get Started
          <Link2 />
        </motion.button>
      </Link>
    </div>
  );
};

export default Divider;
