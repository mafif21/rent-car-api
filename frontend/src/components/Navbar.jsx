import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              Renty
            </span>
          </Link>
          <div>
            <ul className="font-medium text-sm flex p-4 md:p-0 ">
              <li>
                <a
                  href="#about"
                  className="block py-2 pl-3 pr-4 text-gray-400 hover:text-gray-900"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 pl-3 pr-4 text-gray-400 hover:text-gray-900"
                >
                  Our Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
