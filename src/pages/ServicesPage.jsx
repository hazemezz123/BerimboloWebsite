import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Video, Users } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: Shield,
      title: "Home Security",
      imgUrl: "security-265130_1920.jpg",
      description: `Our cutting-edge home security systems are designed to provide the ultimate protection for you and your loved ones. 
      
      - **Smart Monitoring:** Real-time notifications, advanced motion detection, and 24/7 support ensure your home stays safe.  
      - **Custom Alarm Systems:** Protect against intrusions, fires, and gas leaks with state-of-the-art alarm systems.  
      - **Seamless Control:** Manage your security system from anywhere via a smartphone app for added convenience.`,
    },
    {
      icon: Lock,
      title: "Business Security",
      imgUrl: "pexels-scottwebb-430208.jpg",
      description: `Safeguard your business assets and ensure operational continuity with our comprehensive solutions.  
      
      - **Access Control Systems:** Grant and restrict access to critical areas using biometric or card-based systems.  
      - **Custom Risk Assessments:** Our experts analyze vulnerabilities and create tailored solutions to meet your needs.  
      - **Integrated Surveillance:** Combine alarms, cameras, and smart locks into a unified security system.`,
    },
    {
      icon: Video,
      title: "Video Surveillance",
      imgUrl: "StockSnap_1VZ50RICYR.jpg",
      description: `Stay vigilant with our high-definition video surveillance systems designed for all environments.  
      
      - **Crystal-Clear Quality:** Capture every detail with 4K cameras and night vision technology.  
      - **Cloud Storage:** Securely store footage for weeks, accessible anytime from your devices.  
      - **Smart AI Analytics:** Detect unusual activities, recognize license plates, and track movements effortlessly.`,
    },
    {
      icon: Users,
      title: "Security Personnel",
      imgUrl: "technology-8760347_1920.jpg",
      description: `Our professional security personnel are trained to provide unparalleled protection for individuals, events, and properties.  
      
      - **Vigilant Monitoring:** Highly trained guards ensure your premises are under constant watch.  
      - **Event Security Experts:** Prevent disturbances and manage crowd control with experienced professionals.  
      - **On-Demand Patrols:** Mobile patrol teams provide flexible and reliable coverage day and night.`,
    },
  ];

  return (
    <motion.main
      className="bg-gradient-to-br from-deepPurple-darkest to-deepPurple-accent text-white font-JetBrains"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {services.map((service, index) => (
        <ServiceSection key={index} {...service} index={index} />
      ))}
    </motion.main>
  );
};

// eslint-disable-next-line react/prop-types
const ServiceSection = ({ icon: Icon, title, description, index, imgUrl }) => (
  <motion.section
    className="min-h-screen flex flex-col justify-center items-center px-10 text-center bg-deepPurple-lightest rounded-xl shadow-lg "
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    style={{
      backgroundImage: `url(/${imgUrl})`, // Add background image here
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div
      className="p-10 backdrop:blur-md flex-col flex justify-center items-center bg-deepPurple-darkest rounded-2xl "
      style={{
        background: "rgba(29 ,0 ,52,0.5)",
        WebkitBackdropFilter: "blur(10px)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.25)",
      }}
    >
      <motion.div className="h-24 w-24 bg-deepPurple-accent p-4 transition-all  hover:scale-125 rounded-full flex justify-center items-center mb-8 shadow-xl">
        <Icon className="h-16 w-16 text-white " />
      </motion.div>
      <h1 className="text-4xl font-bold mb-6 text-white">{title}</h1>
      <motion.p
        className="leading-relaxed max-w-3xl text-base text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: index * 0.4 }}
      >
        {description}
      </motion.p>
    </div>
  </motion.section>
);

export default ServicesPage;
