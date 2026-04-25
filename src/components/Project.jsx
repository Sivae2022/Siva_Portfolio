import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

// Your images
import project1 from "../assets/images/ai.png";
import project2 from "../assets/images/job.jpg";
import project3 from "../assets/images/e.jpg";
import project4 from "../assets/images/spam.jpg";
import project5 from "../assets/images/sales.png";

const Project = () => {
  const projects = [
    {
      img: project2,
      name: "Job Portal Web Application",
      desc: "Full-stack app with role-based access, JWT authentication, and optimized database queries.",
      github: "https://github.com/Sivae2022/jobify",
      live: "#",
    },
    {
      img: project3,
      name: "E-Commerce Web App",
      desc: "Built product catalog, cart, and order system with optimized API performance.",
      github: "https://github.com/Sivae2022/Food-Ordering-System",
      live: "#",
    },
    {
      img: project1,
      name: "Customer Support Chatbot",
      desc: "AI chatbot using NLP for automated customer query handling.",
      github: "https://github.com/Sivae2022/Chat-Application",
      live: "#",
    },
    {
      img: project4,
      name: "Email Spam Detection",
      desc: "Machine learning model to classify spam emails using NLP techniques.",
      github: "https://github.com/yourusername/spam-detection",
      live: "#",
    },
    {
      img: project5,
      name: "Sales Prediction Dashboard",
      desc: "Dashboard for forecasting sales using data analysis and visualization.",
      github: "https://github.com/Sivae2022/Sales-Dashboard",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      
      {/* Title */}
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          Real-world applications I’ve built
        </p>
      </div>

      {/* Projects Slider */}
      <div className="max-w-6xl px-5 mx-auto mt-10">
        <div className="w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="bg-slate-700 p-4 rounded-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                  {/* Image */}
                  <img
                    src={project.img}
                    alt={project.name}
                    className="rounded-lg w-full h-48 object-cover"
                  />

                  {/* Title */}
                  <h3 className="text-xl font-semibold mt-4">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-300 mt-2">
                    {project.desc}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-cyan-600 px-3 py-1 rounded hover:bg-cyan-600 transition"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-cyan-600 px-3 py-1 rounded hover:bg-cyan-500 transition"
                    >
                      Live Demo
                    </a>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </section>
  );
};

export default Project;