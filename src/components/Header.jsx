import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-gray-900/50 shadow header-design">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex md:w-2/12 lg:w-1/12 w-1/4 items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <img src="https://firebasestorage.googleapis.com/v0/b/kyroswebsite.appspot.com/o/logo%2Fkyros%20logo.png?alt=media&token=2f2bc540-12ff-4ded-91bd-6b35b5641f84" />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-blue-600">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white hover:text-blue-600">
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className="text-white hover:text-blue-600">
                <Link to="/about">About</Link>
              </li>
              <li className="text-white hover:text-blue-600">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
