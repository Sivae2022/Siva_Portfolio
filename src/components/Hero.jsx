import React from "react";
import hero from "../assets/images/hero.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const social_media = [
    {
      icon: "logo-github",
      link: "https://github.com/Sivae2022",
    },
    {
      icon: "logo-linkedin",
      link: "https://www.linkedin.com/in/sivae11",
    },
    {
      icon: "logo-instagram",
      link: "#",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      {/* Image */}
     <div className="flex-1 flex items-center justify-center h-full">
  <div className="p-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl">
    <img
      src={hero}
      alt="hero"
      className="w-64 h-64 md:w-[22rem] md:h-[26rem] object-cover rounded-2xl hover:scale-105 transition duration-300"
    />
  </div>
</div>

      {/* Content */}
      <div className="flex-1">
        <div className="md:text-left text-center">
          
          {/* Heading */}
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Siva E</span>
          </h1>

          {/* Animated Role */}
          <h4 className="md:text-2xl text-lg mt-4 font-bold text-gray-400">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Competitive Programmer",
                1500,
                "AI/ML Enthusiast",
                1500,
                "Full Stack Developer | Java, Spring Boot, React & AI/ML",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h4>

          {/* Button */}
          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary mt-8 hover:scale-105 transition"
          >
            Contact Me
          </button>

          {/* Social Icons */}
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-cyan-600 transition transform hover:scale-125 hover:drop-shadow-lg"
              >
                <ion-icon name={item.icon}></ion-icon>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;