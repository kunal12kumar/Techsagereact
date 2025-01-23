import React from 'react';

const Techsagework = () => {
  const steps = [
    {
      id: 1,
      title: "Unbox",
      description: "Open your Innovator Box and explore all the exciting components inside",
      image: "/path/to/build-image.png", // Replace with the actual path
    },
    {
      id: 2,
      title: "Build",
      description: "Follow the easy-to-understand guide to assemble and create your project",
      image: "/path/to/play-hack-image.png", // Replace with the actual path
    },
    {
      id: 3,
      title: "Discover",
      description: "Learn new skills, experiment, and enjoy the fun of innovation",
      image: "/path/to/think-image.png", // Replace with the actual path
    },
  ];

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 sm:px-16 py-10">
      {steps.map((step) => (
        <div key={step.id} className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full text-white text-lg font-bold mx-auto">
            {step.id}
          </div>
          <h2 className="mt-4 text-xl font-semibold">{step.title}</h2>
          <p className="mt-2 text-gray-600">{step.description}</p>
          <div className="mt-4">
            <img
              src={step.image}
              alt={step.title}
              className="w-40 h-auto mx-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Techsagework;
