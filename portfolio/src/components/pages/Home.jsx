import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import {TypeAnimation} from "react-type-animation"

function Home() {
  return (
 <section
  className="relative flex flex-col md:flex-row   justify-between 
             min-h-screen w-full items-start
             bg-cover bg-center bg-no-repeat px-42 pt-30"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/bg.jpg')",
  }}
>

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col flex-1 gap-3 max-w-5xl">
        <h1 className="text-4xl font-bold">
          <div>Hi, I'm</div>
          <div className="text-black">Surla Sai Saritha</div>
          <div className="mt-2 text-2xl font-semibold">
  <TypeAnimation
    sequence={["Full Stack Python Developer"]}
    speed={50}
    repeat={0}
    className="text-red-500 text-4xl"
  />
</div>

        </h1>

        <p className="text-lg leading-relaxed ">
          A Mechanical Engineering graduate transitioning into software
          development with strong expertise in Python, Django, and React.
          Experienced in building responsive web applications, RESTful APIs,
          and database-driven systems using MySQL and MongoDB.
        </p>
        <div className="flex gap-4 mt-6">

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-2xl border-2 border-red-500 p-4 bg-lime-300 font-bold hover:bg-pink-400 transition"
          >
            <Link to="/saritha_Resume.pdf" target="_blank">
              Download CV
            </Link>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-2xl border-2 border-red-500 p-4 bg-lime-300 font-bold hover:bg-pink-400 transition"
          >
            <Link to="/projects">See My Projects</Link>
          </motion.button>
          <motion.a
            whileHover={{ y: -5 }}
            href="https://github.com/Saisarithasurla"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            whileHover={{ y: -5 }}
            href="https://www.linkedin.com/in/surla-sai-saritha-b2736a260/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"
          >
            <Linkedin size={24} />
          </motion.a>

        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-1 justify-end items-start"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-96 h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl"
        >
          <img
            src="/profile.jpeg"
            alt="Surla Sai Saritha"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

    </section>
  );
}

export default Home;
