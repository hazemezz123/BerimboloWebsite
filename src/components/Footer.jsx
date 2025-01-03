import { Link } from "react-router-dom";
import { Fa500Px } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 hover:bg-gray-200 transition duration-300">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <Fa500Px className="h-10 w-10 text-blue-500" />
            <span className="text-3xl font-bold text-gray-800">Berimbolo</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6 text-gray-600">
            <div>
              <Link
                to="/"
                className="hover:text-blue-500 transition duration-300"
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                to="/services"
                className="hover:text-blue-500 transition duration-300"
              >
                Services
              </Link>
            </div>
            <div>
              <Link
                to="/about"
                className="hover:text-blue-500 transition duration-300"
              >
                About
              </Link>
            </div>
            <div>
              <Link
                to="/contact"
                className="hover:text-blue-500 transition duration-300"
              >
                Contact
              </Link>
            </div>
            <div>
              <Link
                to="/Pricing"
                className="hover:text-blue-500 transition duration-300"
              >
                Pricing
              </Link>
            </div>
            <div>
              <Link
                to="/Shop"
                className="hover:text-blue-500 transition duration-300"
              >
                Shop
              </Link>
            </div>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-gray-300"></div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Berimbolo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
