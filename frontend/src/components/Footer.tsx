import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 w-full">
      {/* Contenu supérieur */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        <div>
          <h2 className="text-6xl  uppercase text-red-500">Recipe</h2>
          <p className="text-gray-700 font-bold text-xl">speed up you cooking workflow</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Title 1</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Title 2</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-gray-400">Links ...</a></li>
            <li><a href="#" className="hover:text-gray-400">Links ...</a></li>
            <li><a href="#" className="hover:text-gray-400">Links ...</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Social Media</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
            <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
            <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Contenu inférieur */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Recipe. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
