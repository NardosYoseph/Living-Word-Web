import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-black">
      <div className="container p-4 sm:p-12 flex flex-col sm:flex-row justify-between items-center">
        {/* Set width and height for the image */}
        <img src="images/casss.jpg" alt="Cassio Logo" width="250" height="100" />
        <p className="text-slate-600">@2024 Living Word.</p>
        <p className="text-slate-600">All rights reserved.</p>
        {/* Mention the development company */}
        <p className="text-slate-600">
        <a href="/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Cassiopeia Technologies</a></p>
      </div>
    </footer>
  );
};

export default Footer;
