import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const images = [
   assets.photo1,
   assets.photo2,
   assets.photo1,
   assets.photo1,
   assets.photo1,
];

const InfiniteCarousel = () => {
  const [width, setWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
   <div className="w-full ">
     <div 
       className="overflow-x-hidden relative w-full max-w-7xl mx-auto p-4 mt-6 h-auto"
      // className="w-full z-50 overflow-hidden flex items-center justify-center "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={carouselRef}
        className="flex cursor-grab w-full"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          animate={!isHovered ? { x: [0, -width, 0] } : {}}
          transition={!isHovered ? { ease: "linear", duration: 50, repeat: Infinity } : {}}
        >
          {images.concat(images).map((src, index) => (
            <motion.div key={index} className="min-w-[400px] min-h-[200px] md:min-w-[400px] p-2 h-auto">
              <img 
                src={src}
                alt={`Slide ${index}`}
                className="w-full  h-full rounded-lg shadow-md"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      
    </div>
   </div>
  );
};

export default InfiniteCarousel;
