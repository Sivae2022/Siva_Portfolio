import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const skillData = {
  Frontend: [
    { logo: "logo-html5", name: "HTML", level: "Advanced", count: 90 },
    { logo: "logo-css3", name: "Tailwind CSS", level: "Advanced", count: 85 },
    { logo: "logo-javascript", name: "JavaScript", level: "Advanced", count: 85 },
    { logo: "logo-react", name: "React.js", level: "Advanced", count: 80 },
  ],
  Backend: [
    { logo: "logo-java", name: "Java", level: "Advanced", count: 85 },
    { logo: "server-outline", name: "Spring Boot", level: "Intermediate", count: 75 },
    { logo: "code-slash-outline", name: "REST APIs", level: "Advanced", count: 85 },
    { logo: "lock-closed-outline", name: "JWT Auth", level: "Intermediate", count: 75 },
  ],
  Database: [
    { logo: "server-outline", name: "MySQL", level: "Intermediate", count: 80 },
    { logo: "server-outline", name: "MongoDB", level: "Intermediate", count: 75 },
    { logo: "server-outline", name: "PostgreSQL", level: "Beginner", count: 65 },
  ],
  Tools: [
    { logo: "git-branch-outline", name: "Git", level: "Intermediate", count: 80 },
    { logo: "logo-github", name: "GitHub", level: "Intermediate", count: 80 },
    { logo: "construct-outline", name: "Maven", level: "Intermediate", count: 70 },
    { logo: "bug-outline", name: "Postman", level: "Intermediate", count: 75 },
  ],
  Concepts: [
    { logo: "bulb-outline", name: "Data Structures", level: "Advanced", count: 85 },
    { logo: "analytics-outline", name: "Algorithms", level: "Advanced", count: 85 },
    { logo: "layers-outline", name: "OOP", level: "Advanced", count: 85 },
    { logo: "server-outline", name: "DBMS", level: "Intermediate", count: 75 },
  ],

  // ✅ NEW SECTION
  "AI Tools": [
    { logo: "sparkles-outline", name: "ChatGPT", level: "Advanced", count: 90 },
    { logo: "sparkles-outline", name: "GitHub Copilot", level: "Intermediate", count: 80 },
    { logo: "sparkles-outline", name: "Google Colab", level: "Intermediate", count: 75 },
    { logo: "sparkles-outline", name: "Notion AI", level: "Intermediate", count: 75 },
    { logo: "sparkles-outline", name: "Claude AI", level: "Beginner", count: 65 },
  ],
};

  return (
    <section id="skills" className="py-10 bg-gray-800">
      <div className="text-center text-gray-100">

        {/* Title */}
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>

        {/* Tabs */}
        <div className="flex justify-center mt-8 gap-4 flex-wrap">
          {Object.keys(skillData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full border transition ${
                activeTab === tab
                  ? "bg-cyan-600 text-white"
                  : "border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="flex justify-center mt-10 gap-8 flex-wrap">
          {skillData[activeTab].map((skill, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-xl w-40 text-center transform hover:-translate-y-2 transition duration-300"
            >
              {/* Circle */}
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%, #1f2937 ${skill.count}%)`,
                }}
                className="w-24 h-24 mx-auto rounded-full flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-3xl text-cyan-600">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>

              {/* Text */}
              <p className="mt-3 font-semibold">{skill.name}</p>
              <p className="text-sm text-gray-400">{skill.level}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;