import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const footerItems = [
    {
      name: "SHOP",
      subItems: [
        { subName: "NewArrival" },
        { subName: "Women" },
        { subName: "Men" },
        { subName: "Accessories" },
        { subName: "Sale" },
      ],
    },
    {
      name: "SUPPORT",
      subItems: [
        { subName: "Help Center" },
        { subName: "Track Order" },
        { subName: "Returns" },
        { subName: "Shipping" },
        { subName: "Contact Us" },
      ],
    },
    {
      name: "COMPANY",
      subItems: [
        { subName: "About" },
        { subName: "Careers" },
        { subName: "Press" },
        { subName: "Piracy" },
        { subName: "Terms" },
      ],
    },
  ];

  const logos = [
    { icon: <FaFacebookF /> },
    { icon: <FaInstagram /> },
    { icon: <FaLinkedinIn /> },
    { icon: <FaGithub /> },
  ];

  return (
    <div className="text-white py-12">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 sm:px-10 lg:px-40 pb-10">
        
        {/* Brand */}
        <div>
          <h1 className="font-cormorant text-3xl sm:text-4xl font-bold">LUXE.</h1>
          <h2 className="pt-3 text-gray-400 font-outfit font-semibold text-sm sm:text-base">
            Premium lifestyle and fashion <br className="hidden sm:block"/> 
            destination for those who appreciate <br className="hidden sm:block"/> 
            quality and elegance.
          </h2>
        </div>

        {/* Links */}
        {footerItems.map((item, idx) => (
          <div key={idx}>
            <div className="font-montserrat font-bold mb-3">{item.name}</div>

            {item.subItems.map((subItem, idx2) => (
              <div
                key={idx2}
                className="font-outfit text-gray-300 font-light mb-1 text-sm"
              >
                {subItem.subName}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 px-6 sm:px-10 lg:px-40 border-t border-gray-800 pt-6 sm:pt-10">
        
        <div className="text-center sm:text-left text-sm">
          <h1>© 2025 LUXE. All rights reserved.</h1>
        </div>

        <div className="flex gap-3">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex p-2 border text-gray-400 cursor-pointer border-gray-700 rounded-full hover:text-white hover:border-white transition"
            >
              {logo.icon}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Footer;