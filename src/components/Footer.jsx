import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-sm p-4 text-center text-white">
      © {new Date().getFullYear()} Siva E — Built with React & Tailwind CSS
    </div>
  );
};

export default Footer;
