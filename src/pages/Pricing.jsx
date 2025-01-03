import React from "react";

const plans = [
  {
    name: "Basic Platform",
    price: "$229/yr",
    description:
      "Perfect for bloggers and small site owners requiring occasional cleanups with ongoing security scans.",
    features: [
      true,
      true,
      "30 hrs",
      true,
      "Every 12 hrs",
      true,
      true,
      false,
      false,
    ],
    buttonText: "Buy Now",
  },
  {
    name: "Pro Platform",
    price: "$339/yr",
    description:
      "Ideal for SMBs who want to minimize disruptions with advanced support for quick SSL certificate transfers.",
    features: [
      true,
      true,
      "12 hrs",
      true,
      "Every 6 hrs",
      true,
      true,
      true,
      false,
    ],
    buttonText: "Buy Now",
  },
  {
    name: "Business Platform",
    price: "$549/yr",
    description:
      "Fastest response time for malware cleanups with frequent scans to help detect and protect against vulnerabilities.",
    features: [
      true,
      true,
      "6 hrs",
      true,
      "Every 30 mins",
      true,
      true,
      true,
      true,
    ],
    buttonText: "Buy Now",
  },
  {
    name: "Junior Dev",
    price: "$999.98/yr",
    description:
      "Ideal for freelancers, web pros, and agencies with 5+ sites requiring quick SLAs, access to trained reps, and comprehensive malware protection.",
    features: [5, true, "12 hrs", true, "Every 6 hrs", true, true, true, true],
    buttonText: "Chat Now",
  },
];

const featureList = [
  "Sites Covered",
  "Malware & Hack Removals",
  "SLA to Remove Malware",
  "Website Application Firewall (WAF)",
  "Security Scan Frequency",
  "Post-cleanup Basic Report",
  "Blacklist Monitoring & Removal",
  "SSL Support & Monitoring",
  "CDN Speed Enhancement",
];

const PricingTable = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
          Our Pricing Plans
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
            {/* Table Head */}
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-4 text-left text-sm font-semibold"></th>
                {plans.map((plan, index) => (
                  <th
                    key={index}
                    className={`p-4 text-center text-lg font-semibold`}
                  >
                    {plan.name}
                    <p className="text-base font-normal mt-1">{plan.price}</p>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {featureList.map((feature, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="p-4 text-left text-gray-700 font-medium">
                    {feature}
                  </td>
                  {plans.map((plan, colIndex) => (
                    <td
                      key={colIndex}
                      className="p-4 text-center text-gray-800 font-medium"
                    >
                      {plan.features[rowIndex] === true
                        ? "✔️"
                        : plan.features[rowIndex] === false
                        ? "❌"
                        : plan.features[rowIndex]}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Call-to-action Row */}
              <tr>
                <td className="p-4"></td>
                {plans.map((plan, index) => (
                  <td key={index} className="p-4 text-center">
                    <button
                      className={`py-2 px-4 rounded font-bold transition duration-300 transform hover:scale-105 ${
                        index === 3
                          ? "bg-blue-600 text-white hover:bg-blue-500"
                          : "bg-blue-500 text-white hover:bg-blue-400"
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
