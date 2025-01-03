const products = [
  {
    id: 1,
    name: "Wireless Camera",
    price: "$99.99",
    image: "https://via.placeholder.com/150",
    rating: 4,
    description: "High-definition wireless camera with night vision.",
    category: "Security Cameras",
  },
  {
    id: 2,
    name: "Alarm System",
    price: "$149.99",
    image: "https://via.placeholder.com/150",
    rating: 5,
    description: "Complete alarm system with sensors and remote control.",
    category: "Alarm Systems",
  },
  {
    id: 3,
    name: "CCTV Kit",
    price: "$199.99",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    description: "CCTV kit with 4 cameras for 24/7 surveillance.",
    category: "CCTV",
  },
  {
    id: 4,
    name: "Smart Lock",
    price: "$79.99",
    image: "https://via.placeholder.com/150",
    rating: 3.5,
    description: "Smart lock with keyless entry and mobile app integration.",
    category: "Locks & Security",
  },
  {
    id: 5,
    name: "Doorbell Camera",
    price: "$129.99",
    image: "https://via.placeholder.com/150",
    rating: 4.7,
    description: "Video doorbell with motion detection and two-way audio.",
    category: "Smart Home",
  },
  {
    id: 6,
    name: "Motion Detector",
    price: "$59.99",
    image: "https://via.placeholder.com/150",
    rating: 4,
    description: "Detects movement and sends alerts to your phone.",
    category: "Security Sensors",
  },
  {
    id: 7,
    name: "Surveillance Drone",
    price: "$499.99",
    image: "https://via.placeholder.com/150",
    rating: 5,
    description: "Aerial surveillance drone with HD camera and GPS.",
    category: "Drones",
  },
  {
    id: 8,
    name: "Smart Light Bulb",
    price: "$29.99",
    image: "https://via.placeholder.com/150",
    rating: 4.2,
    description: "Smart light bulb with adjustable brightness and colors.",
    category: "Smart Home",
  },
];

const Shop = () => {
  return (
    <div className="bg-white min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Shop Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 border border-gray-200"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-500">{product.description}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">
                  {"⭐".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </span>
              </div>
              <p className="text-gray-600 font-semibold mt-2">
                {product.price}
              </p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
