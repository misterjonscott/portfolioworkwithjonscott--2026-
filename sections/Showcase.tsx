import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ShowcaseImage {
  src: string;
  title: string;
  description: string;
}

// Hardcoded array of image objects with descriptions
const images: ShowcaseImage[] = [
  // Add showcase images here
];

const Showcase = () => {
  const [selectedImage, setSelectedImage] = useState<ShowcaseImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleImageClick = (imageObject: ShowcaseImage): void => {
    setSelectedImage(imageObject);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="section-container relative min-h-[100dvh] flex items-center justify-center justify-[safe_center] flex-col py-12 md:py-20 z-0 bg-indigo-100 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto grid grid-cols-3 gap-2">
        {images.map((image, index) => {
          const cardVariants = {
            hidden: { opacity: 0, scale: 0.9, filter: "grayscale(100%)" },
            visible: { opacity: 1, scale: 1, filter: "grayscale(100%)", transition: { duration: 0.5, delay: index * 0.05 } },
            hover: { scale: 1.05, filter: "grayscale(0%)", transition: { duration: 0.2 } },
          };

          return (
            <motion.div
              key={image.src}
              className="relative shadow-lg rounded-lg overflow-hidden cursor-pointer aspect-square"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 768px) 33vw, 33vw"
                style={{ objectFit: "cover" }}
                quality={75}
              />
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            className="absolute inset-0 z-40 flex items-center justify-center bg-black bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative w-full max-w-3xl mx-4 p-8 bg-slate-50 rounded-lg shadow-2xl"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
                <button
                onClick={handleCloseModal}
                className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center  bg-gray-700 text-white rounded-full text-3xl font-bold border-4 border-white pb-1"
                aria-label="Close modal"
                >
                &times;
                </button>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  style={{ objectFit: "contain" }}
                  quality={90}
                />
              </div>
              <div className="mt-4 p-2 text-center text-gray-700">
                <h3 className="text-xl font-semibold mb-1">{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Showcase;