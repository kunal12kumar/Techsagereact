import React from "react";

export default function Newfeatures(){

    return(
        <div className="bg-gray-50 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Why choose us?</h2>
        <p className="text-gray-600 mt-2">
          Start your robotics journey with our interactive workshop
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Free Workshop Card */}
        <div className="bg-white shadow-md rounded-lg p-8 flex-1 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-500 text-white rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold">Free workshop</h3>
          <p className="text-gray-600 mt-2">
            Helping focusing on what truly matters first.
          </p>
        </div>

        {/* Hands-on Robotics Card */}
        <div className="bg-white shadow-md rounded-lg p-8 flex-1 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-500 text-white rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M9 21l6-18"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold">Hands-on robotics</h3>
          <p className="text-gray-600 mt-2">
            Students will make real working robots.
          </p>
        </div>
      </div>
    </div>
    )
}