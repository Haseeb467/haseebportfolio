"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ImageTrailEffect = ({
  imageSources = [],
  containerClassName = "",
  imageClassName = "",
  triggerDistance = 70,
  maxTrailImages = 10,
  useFadeEffect = true,
  content,
}) => {
  const containerRef = useRef(null);
  const [trailImages, setTrailImages] = useState([]);
  const lastPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const dx = e.clientX - lastPosition.current.x;
      const dy = e.clientY - lastPosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance >= triggerDistance) {
        const newTrailImage = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          src: imageSources[Math.floor(Math.random() * imageSources.length)],
        };

        setTrailImages((prev) => {
          const updated = [...prev, newTrailImage];
          if (updated.length > maxTrailImages) updated.shift();
          return updated;
        });

        lastPosition.current = { x: e.clientX, y: e.clientY };
      }
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [imageSources, triggerDistance, maxTrailImages]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      {content && <div className="relative z-20">{content}</div>}

      {trailImages.map((img) => (
        <Image
          key={img.id}
          src={img.src}
          alt="trail"
          width={120}
          height={120}
        //   className={`object-cover scale-0 opacity-0 
        //     data-[status='active']:scale-100 data-[status='active']:opacity-100 
        //     transition-transform data-[status='active']:duration-300 duration-300 
        //     data-[status='active']:ease-out-expo absolute 
        //     -translate-y-[50%] -translate-x-[50%] ${imageClassName}`}
          className={`object-cover  duration-300 ease-out-expo pointer-events-none absolute transition-transform  transform -translate-x-[50%] -translate-y-[50%] ${imageClassName} ${
            useFadeEffect ? "opacity-100 animate-fadeOut duration-500 scale-100 " : ""
          }`}
          style={{ top: img.y, left: img.x }}
        />
      ))}

      <style jsx>{`
        @keyframes fadeOut {
          from {
            opacity: 1.0;
            transform: scale(2) translate(-50%, -50%);
          }
          to {
            opacity: 0;
            transform: scale(1) translate(-50%, -50%);
          }
        }
        .animate-fadeOut {
          animation: fadeOut 7s forwards;
        }
      `}</style>
    </div>
  );
};

export default ImageTrailEffect;
