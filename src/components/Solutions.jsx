import "../CSS/Solutions.css";

const Solutions = () => {
  const solutions = [
    {
      img: "./Security On-amico.svg",
      description: "Comprehensive security solutions tailored for your needs.",
    },
    {
      img: "./Secure data-cuate.svg",
      description: "Robust data protection to keep your information safe.",
    },
    {
      img: "./Drone surveillance-amico.svg",
      description:
        "Advanced drone surveillance for enhanced security monitoring.",
    },
    {
      img: "./Security-bro.svg",
      description: "Innovative security systems for peace of mind.",
    },
  ];

  return (
    <div className="py-20 bg-gray-100">
      <section className="container mx-auto px-8 lg:px-20">
        {/* Header Section */}
        <figure className=" space-y-4 text-center leading-7 max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center">
            Solutions Overview
          </h1>
          <p className="text-gray-600">
            Discover our comprehensive solutions for various facility types, as
            well as the stories of our customers and partnerships. Assemble your
            own kit of devices for security and comfort.
          </p>
        </figure>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-col bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105"
            >
              {/* Image Wrapper */}
              <div className="ImgHover mb-4">
                <img
                  className="rounded-xl object-cover h-64 w-full"
                  src={solution.img}
                  alt={`Solution ${index + 1}`}
                />
              </div>
              {/* Description */}
              <p className="text-gray-700 text-center">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Solutions;
