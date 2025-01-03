import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Fa500Px } from "react-icons/fa";
import { IoAccessibilitySharp, IoAlertCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { LuShoppingBasket } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-gray-800 sticky top-0 z-50 font-semibold font-JetBrains bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <nav className="hidden md:flex space-x-4 bg-white border-gray-200 border-2 rounded-lg p-2">
          <Link to="/" className="flex items-center space-x-2 border-r pr-5">
            <Fa500Px className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold">Berimbolo</span>
          </Link>
          <NavLink to="/">
            <div className="flex justify-center items-center">
              <FaHome className="mr-2" />
              <span>Home</span>
            </div>
          </NavLink>
          <NavLink to="/services">
            <div className="flex justify-center items-center">
              <IoAccessibilitySharp className="mr-2" />
              <span>Services</span>
            </div>
          </NavLink>
          <NavLink to="/about">
            <div className="flex justify-center items-center">
              <IoAlertCircleOutline className="mr-2" />
              <span>About</span>
            </div>
          </NavLink>
          <NavLink to="/contact">
            <div className="flex justify-center items-center">
              <IoMdContact className="mr-2" />
              <span>Contact</span>
            </div>
          </NavLink>
          <NavLink to="/Pricing">
            <div className="flex justify-center items-center">
              <MdOutlineAttachMoney className="mr-2" />
              <span>Pricing</span>
            </div>
          </NavLink>
          <NavLink to="/Shop">
            <div className="flex justify-center items-center">
              <LuShoppingBasket className="mr-2" />
              <span>Shop</span>
            </div>
          </NavLink>
        </nav>
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          className="bg-white text-center border-t border-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </NavLink>
        </motion.div>
      )}
    </header>
  );
};

const NavLink = ({ to, children, ...props }) => (
  <Link
    to={to}
    className="block py-2 px-4 text-sm hover:bg-gray-100 rounded-lg transition-colors text-gray-800"
    {...props}
  >
    {children}
  </Link>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Header;
