import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Social Media Addiction Analysis",
    desc: "Analyzed data from 705 students using MySQL and Power BI to study social media usage. Dashboard insights revealed links between high social media use, poor sleep, conflicts, and lower academic performance.",
    github: "https://github.com/Saisarithasurla/MYSQL_notes-Project/tree/main/PROJECT",
    image: "/sql.jpeg",
    tech:["MySQL","PowerBI"],
  },
  {
    id: 2,
    title: "GUI Calculator with Advanced Features",
    desc: "Developed a desktop calculator using Python and Tkinter with basic and scientific operations, including trigonometric functions. Features include sign toggle, backspace, clear, and a responsive GUI with custom icons.",
    github: "https://github.com/Saisarithasurla/Calculator",
    image: "/calculator.jpg",
    tech:["Python","Tkinter","GUI Developement"],
  },
  {
    id: 3,
    title: "Interactive Image Gallery",
    desc: "Built a responsive image gallery using HTML, CSS, and JavaScript with smooth navigation and full-screen viewing. Optimized for both desktop and mobile, ensuring seamless browsing and consistent performance.",
    live: "https://saisarithasurla.github.io/Image_Gallery/",
    github: "https://github.com/Saisarithasurla/Image_Gallery",
    image: "/image_gallery.jpg",
    tech:["HTML","CSS","JavaScript"],
  },
];

function Projects() {
  return (
    <div className="py-16 px-4">
      <h1 className="text-5xl text-center text-purple-700 font-bold mb-6 -mt-10">
        My Projects
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-18">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center p-5 rounded-2xl  bg-white shadow-xl hover:shadow-2xl transition duration-300 ease-in-out h-132 w-80"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">
              {project.title}
            </h2>
            <p className="text-sm text-gray-700 text-center mb-4 flex-1 ">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
    {project.tech.map((t, idx) => (
      <span
        key={idx}
        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full"
      >
        {t}
      </span>
    ))}
  </div>
            <div className="flex gap-4 mt-auto">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-2xl bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                  Live Demo
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-2xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
