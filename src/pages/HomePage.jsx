import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Solutions from "../components/Solutions";
import Divider from "../components/Sec1Divider";
const HomePage = () => {
  return (
    <motion.main
      className="font-JetBrains"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Divider />
      <Services />
      <Solutions />
    </motion.main>
  );
};

export default HomePage;
