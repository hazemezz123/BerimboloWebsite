import { motion } from "framer-motion";

const AboutPage = () => {
  const features = [
    {
      title: "Advanced Threat Detection",
      description:
        "Our systems provide real-time monitoring and detection to prevent potential security threats before they happen.",
    },
    {
      title: "24/7 Monitoring",
      description:
        "We offer round-the-clock monitoring to ensure constant protection for your home, business, or assets.",
    },
    {
      title: "Customized Solutions",
      description:
        "Our team tailors security plans to suit your specific requirements and provide the most effective protection.",
    },
  ];

  return (
    <motion.main
      className="py-20 bg-white min-h-screen text-gray-900 font-JetBrains"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.h1
          className="text-5xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Berimbolo
        </motion.h1>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg border border-gray-300">
          <motion.p
            className="text-xl mb-6 leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Berimbolo is a leading provider of comprehensive security solutions.
            With years of experience and a team of dedicated professionals, we
            are committed to ensuring the safety and peace of mind of our
            clients.
          </motion.p>
          <motion.p
            className="text-lg mb-6 text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Our mission is to deliver innovative, reliable, and customized
            security services that meet the unique needs of each client. We
            combine cutting-edge technology with expert human insight to create
            robust security systems that protect what matters most.
          </motion.p>
          <motion.p
            className="text-lg mb-6 text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            At Berimbolo, we believe that security is not just about technology
            – it's about people. That's why we invest in ongoing training for
            our team and maintain open lines of communication with our clients.
            Your safety is our top priority.
          </motion.p>
        </div>

        {/* Features Section */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition-all cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Section */}
        <motion.p
          className="text-center text-lg mt-12 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Discover peace of mind with Berimbolo – your trusted partner in
          security.
        </motion.p>
      </div>
    </motion.main>
  );
};

export default AboutPage;
