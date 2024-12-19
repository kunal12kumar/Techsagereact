import React from "react";

export default  function Footer(){

    return(
        <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        {/* Email Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <a
            href="mailto:support@techsage.in"
            className="flex items-center text-gray-800 hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m8 0l-8-8m8 8l-8 8"
              />
            </svg>
            support@techsage.in
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <img src="/icons/x-icon.png" alt="X" className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <img src="/icons/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <img src="/icons/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <img src="/icons/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>

        {/* Links Section */}
        <div className="w-full flex flex-wrap justify-between text-sm text-gray-800">
          <div className="w-1/3 md:w-auto mb-4 md:mb-0">
            <h3 className="font-bold mb-2">Sections</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-500">Benefits</a></li>
              <li><a href="#" className="hover:text-blue-500">Features</a></li>
              <li><a href="#" className="hover:text-blue-500">What's Inside</a></li>
              <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-500">Numbers</a></li>
              <li><a href="#" className="hover:text-blue-500">Comparison</a></li>
              <li><a href="#" className="hover:text-blue-500">Get Started</a></li>
            </ul>
          </div>
          <div className="w-1/3 md:w-auto mb-4 md:mb-0">
            <h3 className="font-bold mb-2">Company</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-500">Mobile App</a></li>
              <li><a href="#" className="hover:text-blue-500">Download App</a></li>
              <li><a href="#" className="hover:text-blue-500">Highlight</a></li>
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">FAQ's</a></li>
              <li><a href="#" className="hover:text-blue-500">Testimonials</a></li>
            </ul>
          </div>
          <div className="w-1/3 md:w-auto">
            <h3 className="font-bold mb-2">Pages</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-500">Home</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
              <li><a href="#" className="hover:text-blue-500">Waitlist</a></li>
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Changelog</a></li>
              <li><a href="#" className="hover:text-blue-500">404</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    )
}