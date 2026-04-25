import React from "react";
import hireMe from "../assets/images/hr.png";

const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      
      {/* Title */}
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          Let’s build something great together
        </p>
      </div>

      {/* Content Box */}
      <div className="bg-gray-700 px-8 rounded-2xl py-8 lg:max-w-4xl mx-auto mt-20 flex gap-10 lg:flex-row flex-col items-center">

        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">
            Looking for a Full Stack Developer?
          </h2>

          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            I’m a passionate Full Stack Developer with experience in building scalable web applications using Java, Spring Boot, and React. 
            I focus on writing clean, efficient code and creating user-friendly interfaces.
            <br /><br />
            I have built real-world projects including a job portal, e-commerce platform, and AI-based chatbot. 
            I’m always eager to solve challenging problems and contribute to impactful projects.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="mailto:elusiva007@gmail.com"
              className="btn-primary hover:scale-105 transition"
            >
              Say Hello
            </a>

            <a
  href="https://drive.google.com/uc?export=download&id=1PsHZDAKjcJ-WvI6UsGlZF7drScYJ-fLN"
  target="_blank"
  className="border border-cyan-600 px-6 py-2 rounded-lg hover:bg-cyan-600 transition"
>
  Download CV
</a>
          </div>
        </div>

        {/* Right Image (Hero Style) */}
        <div className="flex-1 flex items-center justify-center">
          <div className="p-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl">
            <img
              src={hireMe}
              alt="hire me"
              className="w-58 h-68 md:w-72 md:h-80 object-cover rounded-2xl hover:scale-105 transition duration-300"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hireme;