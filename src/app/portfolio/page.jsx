"use client";
import ImageTrailEffect from "@/components/lightswind/ImageTrailEffect";
import { ConfettiButton } from "@/components/lightswind/confetti-button";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const items = [
  {
    id: 1,
    color: "from-gray-700 to-yellow-400",
    title: "Next.js Commerce",
    desc: "A modern e-commerce platform built with Next.js. Features include user authentication, product catalog, shopping cart functionality, and secure payment integration with Stripe API.",
    img: "/ecommainpic.png",
    link: "#",
    video: "/e-commerce-store.mp4",
    tech: ["Next.js", "TypeScript", "MongoDB"],
  },
  {
    id: 2,
    color: "from-blue-900 to-indigo-900",
    title: "WispWish - AI Gift Generator",
    desc: "An AI-powered gifting platform where users can generate personalized gifts such as poems, images, voices, and songs. Built with full-stack technologies to provide a seamless and creative gift experience.",
    img: "/wispwishpic2.png",
    link: "https://www.wispwish.com/",
    video: "#",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    color: "from-[#2c4d44] to-yellow-100",
    title: "Service Business Website",
    desc: "A professional service-oriented website built with WordPress and Elementor. It features a modern design, responsive layout, and customizable sections to showcase services, portfolio, and contact details effectively.",
    img: "/servicewebsite.png",
    link: "https://mediumaquamarine-yak-187193.hostingersite.com/#",
    tech: ["WordPress", "Elementor", "Responsive Design", "SEO Friendly"],
  },
  {
    id: 4,
    color: "from-emerald-900 to-teal-900",
    title: "Spotify Music App",
    desc: "A music streaming application replica with Spotify Web API integration. Includes playlist management, music search, real-time playback controls, and personalized recommendations.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
    tech: ["React", "Spotify API", "Tailwind", "Context API"],
  },
];

const ProjectCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  const isFullyInView = useInView(cardRef, { once: false, amount: 0.9 });
  const [showModal, setShowModal] = useState(false);
  const [videoError, setVideoError] = useState(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const handleVideoError = (e) => {
    setVideoError(`Failed to load video: ${item.video || "undefined"}. Check file path or format.`);
    setIsVideoLoading(false);
    console.error("Video error:", e);
  };

  const handleVideoLoaded = () => {
    setIsVideoLoading(false);
    console.log(`Video loaded successfully: ${item.video}`);
  };

  useEffect(() => {
    if (showModal) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.documentElement.style.overflow = "unset";
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    }

    const handleEsc = (event) => {
      if (event.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.documentElement.style.overflow = "unset";
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    };
  }, [showModal]);

  return (
    <motion.div
      ref={cardRef}
      className={`w-screen h-screen flex items-start justify-center bg-gradient-to-br ${item.color} relative ${isFullyInView ? "overflow-y-auto" : "overflow-y-hidden"} snap-center`}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-white rounded-full blur-2xl"></div>
      </div>
      <div className="container mx-auto px-8 lg:px-16 flex items-center justify-between max-w-7xl py-16">
        <motion.div
          className="flex-1 pr-8 lg:pr-16 z-10"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="text-white/40 text-lg font-mono mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            0{index + 1}
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {item.title}
          </motion.h1>
          <motion.p
            className="text-white/80 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {item.desc}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {item.tech.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm border border-white/20"
              >
                {tech}
              </span>
            ))}
          </motion.div>
          <motion.div
            className="flex gap-4 z-20"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href={item.link} passHref>
              <motion.button
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.button>
            </Link>
            <motion.button
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setShowModal(true);
                setIsVideoLoading(true);
                setVideoError(null);
              }}
            >
              Live Demo
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          animate={isInView ? { x: 0, opacity: 1, scale: 1 } : { x: 100, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="relative w-80 h-96 md:w-96 md:h-[500px] lg:w-[500px] lg:h-[600px] xl:w-[600px] xl:h-[700px]"
            whileHover={{ scale: 1.02, rotateY: 5, transition: { duration: 0.4 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 rounded-2xl blur-xl scale-105"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-110"
                loading="lazy" // Enable lazy loading
                quality={75} // Reduce quality for faster load
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm"
              animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/15 rounded-full backdrop-blur-sm"
              animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>
      {showModal && (
        <motion.div
          className="fixed inset-0 z-[1001] flex items-center justify-center bg-black/90 backdrop-blur-md overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(false);
          }}
        >
          <motion.div
            className="relative bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-3xl h-[80vh] flex items-center justify-center overflow-hidden"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white hover:text-red-400 text-2xl font-bold z-10 transition-colors"
            >
              ✕
            </button>
            <div className="relative w-full aspect-video z-10">
              {isVideoLoading && !videoError && (
                <div className="flex items-center justify-center h-full bg-gray-800 rounded-lg">
                  <p className="text-white text-lg">Loading video...</p>
                </div>
              )}
              {videoError ? (
                <div className="flex items-center justify-center h-full bg-gray-800 rounded-lg">
                  <p className="text-red-400 text-lg">{videoError}</p>
                </div>
              ) : item.video ? (
                <video
                  autoplay
                  controls
                  muted
                  loop
                  className="w-full h-full rounded-lg object-contain"
                  onError={handleVideoError}
                  onCanPlay={handleVideoLoaded}
                >
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="flex items-center justify-center h-full bg-gray-800 rounded-lg">
                  <p className="text-white text-lg">No demo video available for this project.</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

const PortfolioPage = () => {
  const ref = useRef();
  const titleRef = useRef(null);
  const ctaRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: false, amount: 0.5 });

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  useEffect(() => {
    const handleNavbarVisibility = () => {
      const navbar = document.querySelector("nav") || document.querySelector(".navbar") || document.querySelector('[class*="nav"]');
      if (navbar) {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const threshold = viewportHeight * 0.8;

        if (isCtaInView) {
          navbar.style.transform = "translateY(0)";
          navbar.style.opacity = "1";
          navbar.style.pointerEvents = "auto";
          navbar.style.transition = "transform 0.8s ease, opacity 0.8s ease";
        } else if (scrollY <= threshold) {
          navbar.style.transform = "translateY(0)";
          navbar.style.opacity = "1";
          navbar.style.pointerEvents = "auto";
          navbar.style.transition = "transform 0.8s ease, opacity 0.8s ease";
        } else {
          navbar.style.transform = "translateY(-100%)";
          navbar.style.opacity = "0";
          navbar.style.pointerEvents = "none";
          navbar.style.transition = "transform 0.8s ease, opacity 0.8s ease";
        }
      }
    };

    handleNavbarVisibility();
    window.addEventListener("scroll", handleNavbarVisibility);
    return () => {
      window.removeEventListener("scroll", handleNavbarVisibility);
      const navbar = document.querySelector("nav") || document.querySelector(".navbar") || document.querySelector('[class*="nav"]');
      if (navbar) {
        navbar.style.transform = "translateY(0)";
        navbar.style.opacity = "1";
        navbar.style.pointerEvents = "auto";
      }
    };
  }, [isCtaInView]);

  return (
    <motion.div
      className="h-full bg-white"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh)] flex items-center justify-center text-center bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
          <ImageTrailEffect
            imageSources={[
              "/trail1.png",
              "/trail2.png",
              "/trail3.png",
              "/trail4.png", // Reduced to 8 images
              "/trail5.png",
              "/trail6.png",
              "/trail7.png",
              "/trail8.jpg",
              "/trail9.jpg",
              "/trail10.jpg",
              "/trail11.jpg",
              "/trail12.jpg",
              "/trail13.jpg",
              "/trail14.jpg",
              "/trail15.jpg",
            ]}
            containerClassName="h-full w-full"
            imageClassName="w-28 h-30 rounded-lg shadow-lg" // Reduced size
            triggerDistance={30} // Increased to reduce trigger frequency
            maxTrailImages={7} // Reduced from 8 to 5
            useFadeEffect={false}
            content={
              <motion.div
                ref={titleRef}
                className="relative z-20 text-center flex flex-col items-center justify-center h-full"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isTitleInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1 className="text-6xl  md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-10">
                  My Works
                </h1>
                <p className="text-gray-600 text-xl md:text-2xl font-light">
                  Crafting digital experiences with passion & precision
                </p>
              </motion.div>
            }
          />
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-x-auto snap-x snap-mandatory z-50">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black snap-center" />
            {items.map((item, index) => (
              <ProjectCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div
        ref={ctaRef}
        className="w-screen h-auto flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl pt-36 md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent relative z-10"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Ready to collaborate?
        </motion.h1>
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[400px] md:h-[400px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#374151">
              <textPath xlinkHref="#circlePath" className="text-lg font-medium">
                Let's Build Something Amazing Together •
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="absolute top-0 left-0 right-0 bottom-0 m-auto w-24 h-24 md:w-32 md:h-32"
          >
            <motion.button
              className="w-full h-full bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full flex items-center justify-center font-semibold shadow-xl hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.1, boxShadow: "0 25px 50px rgba(0,0,0,0.25)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ConfettiButton
                className="text-lg md:text-base pt-16 pb-16 w-full rounded-full"
                confettiOptions={{ particleCount: 100, spread: 70 }}
              >
                Hire Me
              </ConfettiButton>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioPage;