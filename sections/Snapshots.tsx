import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Hardcoded array of image objects with descriptions
const images = [
  {
    src: "/images/gallery/GeofeedaAccountsNew.webp",
    title: "Geofeedia Accounts",
    description: "A new user accounts interface designed for enhanced usability and a streamlined onboarding process."
  },
  {
    src: "/images/gallery/finishline-rebuild.webp",
    title: "Finishline Rebuild",
    description: "A complete redesign of the Finishline website, focusing on improved performance and user experience."
  },
  {
    src: "/images/gallery/SkillableInstructorDashboard.webp",
    title: "Skillable Instructor Dashboard",
    description: "A dashboard for instructors to manage labs and track student progress in real-time."
  },
  {
    src: "/images/gallery/chex-dashboard.webp",
    title: "Southern CA Edison Chex Dashboard",
    description: "A dashboard interface for SCE's control center designed for monitoring data pipelines to help prevent wildfires"
  },
  {
    src: "/images/gallery/IndigoRebrandNew.webp",
    title: "Indigo Rebrand",
    description: "Visual identity and user interface for Indigo, a rebranding project with a modern, elegant aesthetic."
  },
  {
    src: "/images/gallery/geofeedia-alerts.webp",
    title: "Geofeedia Alerts",
    description: "An alert system UI for real-time notifications based on location-based data feeds."
  },
  {
    src: "/images/gallery/SkillableLabAdvisor.webp",
    title: "Skillable Lab Advisor",
    description: "The Lab Advisor interface, providing guidance and support for students within a virtual lab environment."
  },
  {
    src: "/images/gallery/SkillableStudentDashboard.webp",
    title: "Skillable Student Dashboard",
    description: "The student-facing dashboard, designed to be intuitive for managing labs and viewing course materials."
  },
  {
    src: "/images/gallery/SkillableStudioUserDashboard.webp",
    title: "Skillable Studio Dashboard",
    description: "The Studio dashboard for creating and managing educational content and virtual labs."
  }
];

const Snapshots = () => {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (imageObject: typeof images[0]) => {
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

export default Snapshots;