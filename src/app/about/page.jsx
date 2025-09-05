"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Open AI Agent SDK",
  "Google ADK",
  "Langchain",
  "Langgraph",
  "Crew AI",
  "WordePress",
  "React.js",
  "Next.js",
  "React Native",
  "React.js",
  "N8N",
  "SCSS",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Node.js",
  "Express.js",
  "GraphQL",
  "RESTful APIs",
  "Fast APIs",
  "Redux",
  "Framer Motion",
  "Three.js",
  "Webpack",
  "Vite",
  "Docker",
  "Firebase",
  "Git",
  "Figma",  
];

const experiences = [
  {
  title: "Freelancer",
  company: "Self-Employed",
  description:
    "Delivered customized web solutions for diverse clients, including business websites, e-commerce platforms, and portfolio sites. Focused on responsive design, SEO optimization, and meeting client requirements effectively.",
  date: "2023 - 2025",
  side: "left",
},

  {
  title: "AI Agent Developer",
  company: "As a Freelancer",
  description:
    "Built and deployed AI agents using LangChain, Gemini API, and CrewAI. Worked on automation solutions such as WhatsApp chatbots, AI calling agents with Twilio, and tool-calling style agents integrated with web applications.",
  date: "2024 - Present",
  side: "right",
},
{
  title: "MERN Stack Developer",
  company: "Self-Employed",
  description:
    "Developed full-stack applications using MongoDB, Express.js, React, and Node.js. Built secure authentication systems, role-based dashboards, and real-time features with a focus on performance and clean UI/UX.",
  date: "2023 - 2025",
  side: "left",
},

];

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <>
    <style jsx>{`
        .no-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Edge */
        }
      `}</style>
      <motion.div
        className="h-screen overflow-y-auto overflow-x-hidden lg:flex"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        ref={containerRef}
      >
        {/* TEXT CONTAINER */}
        <div className="p-6 sm:p-10 md:p-16 lg:p-24 xl:p-32 flex flex-col gap-28 md:gap-36 lg:gap-48 xl:gap-64 lg:w-3/4 xl:w-2/3 ">
          {/* BIOGRAPHY CONTAINER */}
          <motion.div
            className="flex flex-col gap-8 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Profile"
                width={120}
                height={120}
                priority
                onError={() => console.error("Image failed to load")}
                className="w-28 h-28 rounded-full object-cover shadow-xl ring-4 ring-white"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
            </div>
            <h1 className="font-bold text-3xl md:text-4xl bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
              BIOGRAPHY
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
               Welcome to my digital journey! I'm a passionate developer specializing in 
              MERN Stack, WordPress, and AI Agent development. With hands-on experience 
              building full-stack applications, intelligent automation, dynamic websites, 
              and modern web solutions, I focus on creating responsive, scalable, and 
              user-friendly experiences that solve real-world problems.

            </p>
            <blockquote className="italic text-gray-500 border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r-lg">
              {/* "Code is poetry written in logic, and every project is a new verse
              in the digital symphony." */}
              "Every line of code is a step toward innovation, and each project is an 
              opportunity to turn ideas into impactful digital solutions."
            </blockquote>
            {/* <div className="self-end opacity-60">
              <svg
                width="150"
                height="60"
                viewBox="0 0 370 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400"
              >
                <path
                  d="M66 2C66 29.4851 68.6687 64.5118 49.3333 87.4444C42.4997 95.5495 35.7683 97.6796 26.2222 101C20.002 103.164 8.87322 103.873 4 99C-0.260934 94.7391 2.94804 88.1756 8.22222 86.2222C13.7053 84.1915 17.942 84 23.7778 84C33.359 84 41.3193 83.5602 50.2222 87C56.6125 89.469 63.5773 91.9131 69.5555 95.5C75.4778 99.0533 87.1838 104.357 93.5 99.4444C96.1292 97.3995 96.2752 92.5118 96.9444 89.5C97.9646 84.9092 92.6432 83.2024 89 83C84.472 82.7484 82.3397 81.8856 82 88C81.8025 91.5554 83.5627 94.4193 86 97C88.9648 100.139 92.0717 100.96 96 98.7778C99.3106 96.9386 98 90.7299 98 87.5C98 85.0327 98.4365 83.1348 99.2222 80.7778C100.357 77.3743 99.2311 78.4486 101.5 77.9444C105.352 77.0886 108 76.4766 108 81.5C108 85.6646 109 89.3473 109 93.5C109 100.142 108.863 95.0454 110.5 91.4444C112.765 86.4616 116.631 81.205 121.5 78.5C127.057 75.4129 126 82.1509 126 85.5C126 92.5532 124.42 102 134 102C142.932 102 153 102.569 153 91.2222C153 87.1735 153.772 81.3206 148 81C141.934 80.663 142.107 81.8068 139.5 86.5C134.378 95.7204 137.972 105 149.5 105C153.589 105 153.996 99.8977 155.5 96.8889C157.902 92.0843 161 85.4067 161 80C161 74.0547 158.407 82.7413 157.222 84.2222C155.194 86.7574 155 92.5718 155 95.7778C155 99.9302 153.8 104.999 158 107.222C161.954 109.316 164.884 106.382 167.778 103.778C171.15 100.743 175.896 99.1107 180 97C186.143 93.8409 191.659 91.4099 198.222 89.2222C206.505 86.4614 214.839 87 223.5 87C230.613 87 231.628 104 222.5 104C216.954 104 199.251 107.814 207 95.2222C211.456 87.9805 214.484 80.6007 220 73.7778C229.781 61.6805 242.696 50.8197 256.222 43C264.769 38.0591 274.192 34.6264 283 30.2222C286.55 28.4473 280.07 32.3343 278.5 33.5556C271.707 38.8391 266.609 45.3914 260.556 51.4444C255.356 56.6444 250.682 61.459 246.5 67.5C242.917 72.6757 239.364 77.3825 236.556 83C233.829 88.4524 231.82 94.3142 228.556 99.4444C226.693 102.371 225.518 107.823 222.5 109.5C214.795 113.78 217.517 100.438 218.056 95.0556C218.678 88.8318 227.982 85.7572 233.056 88.6111C239.614 92.3003 245.506 97.7883 252 101.778C254.886 103.551 259.46 107 263 107C271.267 107 273.32 81.9392 268.778 77.2222C264.112 72.3774 261.206 80.5039 261 84C260.576 91.2135 257.836 96.9269 264.778 102C272.242 107.454 285.041 112.276 292.111 104.833C298.002 98.6323 304.301 90.8902 308.556 83.4444C310.355 80.295 310.132 84.6251 309.444 86C305.387 94.1158 303 102.264 303 111.5C303 116.021 337.534 99.1863 340.5 98C347.33 95.2679 355.47 93.8299 361.778 90C363.935 88.6902 365.473 88 368 88"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div> */}
            <motion.div
              className="self-center"
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                className="text-gray-400"
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path d="M12 6V14" stroke="currentColor" strokeWidth="1" />
                <path
                  d="M15 11L12 14L9 11"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              />
              <path d="M12 6V14" stroke="#000000" strokeWidth="1" />
              <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1" />
            </motion.svg>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-8 justify-center pb-16"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-3xl md:text-4xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
            >
              EXPERIENCE
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: exp.side === "left" ? -50 : 50 }}
                  animate={isExperienceRefInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="flex justify-between items-center min-h-[200px] mb-8"
                >
                  {/* LEFT */}
                  <div
                    className={`w-5/12 ${
                      exp.side === "right" ? "text-right" : ""
                    }`}
                  >
                    {exp.side === "left" && (
                      <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-blue-500">
                        <div className="font-bold text-lg text-gray-800 mb-2">
                          {exp.title}
                        </div>
                        <div className="text-sm text-gray-600 mb-2 leading-relaxed">
                          {exp.description}
                        </div>
                        <div className="text-blue-600 text-sm font-semibold mb-2">
                          {exp.date}
                        </div>
                        {exp.company && (
                          <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">
                            {exp.company}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  {/* CENTER TIMELINE */}
                  <div className="w-2/12 flex justify-center">
                    <div className="relative">
                      <div className="w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500 rounded"></div>
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-blue-500 shadow-lg">
                        <div className="w-full h-full bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div
                    className={`w-5/12 ${
                      exp.side === "left" ? "text-left" : ""
                    }`}
                  >
                    {exp.side === "right" && (
                      <div className="bg-white p-4 rounded-xl shadow-lg border-r-4 border-purple-500">
                        <div className="font-bold text-lg text-gray-800 mb-2">
                          {exp.title}
                        </div>
                        <div className="text-sm text-gray-600 mb-2 leading-relaxed">
                          {exp.description}
                        </div>
                        <div className="text-purple-600 text-sm font-semibold mb-2">
                          {exp.date}
                        </div>
                        {exp.company && (
                          <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                            {exp.company}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-10 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </motion.div>
    </>
  );
};

export default AboutPage;
