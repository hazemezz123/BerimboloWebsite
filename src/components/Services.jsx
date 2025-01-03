import { useState, useCallback } from "react";
import { Home, Building, Video, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  isHovered,
  onHoverStart,
  onHoverEnd,
}) => (
  <motion.div
    className={`bg-white p-6 rounded-lg shadow-md border-2 border-transparent cursor-pointer transition-all hover:border-blue-500 hover:scale-105 ${
      isHovered === false ? "opacity-50 blur-sm" : ""
    }`}
    onMouseEnter={onHoverStart}
    onMouseLeave={onHoverEnd}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    aria-label={`Service: ${title}`}
  >
    <Icon className="h-12 w-12 text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

ServiceCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isHovered: PropTypes.bool.isRequired,
  onHoverStart: PropTypes.func.isRequired,
  onHoverEnd: PropTypes.func.isRequired,
};

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: Home,
      title: "Home Security",
      description:
        "Protect your home with our state-of-the-art security systems.",
    },
    {
      icon: Building,
      title: "Business Security",
      description:
        "Comprehensive security solutions for businesses of all sizes.",
    },
    {
      icon: Video,
      title: "Video Surveillance",
      description:
        "Advanced video monitoring for enhanced security and peace of mind.",
    },
    {
      icon: Users,
      title: "Security Personnel",
      description: "Trained security professionals to safeguard your property.",
    },
  ];

  const handleHoverStart = useCallback((index) => setHoveredIndex(index), []);
  const handleHoverEnd = useCallback(() => setHoveredIndex(null), []);

  return (
    <section className="py-20 bg-gray-100">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Services
        </h2>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              isHovered={hoveredIndex === null || hoveredIndex === index}
              onHoverStart={() => handleHoverStart(index)}
              onHoverEnd={handleHoverEnd}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/services">
            <motion.button
              className="bg-blue-500 w-52 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
