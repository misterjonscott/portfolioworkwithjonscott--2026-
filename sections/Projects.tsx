'use client';

import { useState, lazy, Suspense } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Types
interface CaseStudy {
  id: string;
  title: string;
  imageSrc: string;
  component: React.LazyExoticComponent<React.ComponentType<Record<string, never>>>;
}

interface CaseStudyViewerProps {
  content: React.ReactNode;
  onClose: () => void;
}

// The full-screen modal component
const CaseStudyViewer: React.FC<CaseStudyViewerProps> = ({ content, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // Close modal when clicking the background
    >
      <motion.div
        className="relative w-full h-[calc(100dvh-120px)] max-w-5xl bg-white rounded-lg shadow-2xl overflow-y-auto p-6 md:p-12"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()} // Prevent clicks on the content from closing the modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-0 text-2xl font-bold text-gray-700 hover:text-red-500 transition-colors z-10 bg-white rounded-lg"
          aria-label="Close modal"
        >
          <X size={32} />
        </button>
        {content}
      </motion.div>
    </motion.div>
  );
};

// Case studies data with corrected paths
const caseStudies: CaseStudy[] = [
  {
    id: 'geofeedia',
    title: 'Geofeedia',
    imageSrc: '/images/casestudies/CaseStudyGeofeediaActive.webp',
    component: lazy(() => import('../components/casestudies/CaseStudyGeofeedia')),
  },
  {
    id: 'indigo',
    title: 'Indigo',
    imageSrc: '/images/casestudies/CaseStudyIndigoActive.webp',
    component: lazy(() => import('../components/casestudies/CaseStudyIndigo')),
  },
  {
    id: 'levelup',
    title: 'LevelUp',
    imageSrc: '/images/casestudies/CaseStudyLevelUpActive.webp',
    component: lazy(() => import('../components/casestudies/CaseStudyLevelUp')),
  },
  {
    id: 'lids',
    title: 'Lids',
    imageSrc: '/images/casestudies/CaseStudyLidsActive.webp',
    component: lazy(() => import('../components/casestudies/CaseStudyLids')),
  },
  {
    id: 'sharpen',
    title: 'Sharpen',
    imageSrc: '/images/casestudies/CaseStudySharpenActive.webp',
    component: lazy(() => import('../components/casestudies/CaseStudySharpen')),
  },
  {
    id: 'skillable',
    title: 'Skillable',
    imageSrc: '/images/casestudies/CaseStudySkillableActive.webp',
    component: lazy(() => import('../components/casestudies/CaseStudySkillable')),
  },
];

// Animation variants for the container and children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger delay for each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, filter: 'grayscale(100%)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'grayscale(100%)',
    transition: { duration: 0.5 },
  },
  hover: { scale: 1.05, filter: 'grayscale(0%)', transition: { duration: 0.2 } },
};

const Projects: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const handleOpenModal = (study: CaseStudy) => {
    setSelectedCaseStudy(study);
    document.body.style.overflow = 'hidden'; // Prevent main page scroll
  };

  const handleCloseModal = () => {
    setSelectedCaseStudy(null);
    document.body.style.overflow = 'unset'; // Re-enable main page scroll
  };

  const CaseStudyComponent = selectedCaseStudy?.component;

  return (
    <div className="section-container relative min-h-[100dvh] flex items-center justify-center justify-[safe_center] flex-col py-12 md:py-20 z-0" style={{ backgroundColor: '#22223b' }}>
      <div className="w-full max-w-6xl mx-auto">
        <h1 className='text-5xl text-center pb-4 font-black tracking-tight font-title text-white'>Case Studies</h1>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Reduced amount to trigger animation sooner
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              className="relative w-full cursor-pointer shadow-lg rounded-xl"
              style={{ aspectRatio: '314 / 119' }} // Maintain true aspect ratio
              variants={itemVariants}
              whileHover="hover"
              onClick={() => handleOpenModal(study)}
            >
              <Image
              className='rounded-xl'
              src={study.imageSrc}
              alt={`${study.title} case study cover`}
              fill
              style={{ objectFit: 'cover' }}
              quality={80}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCaseStudy && (
          <Suspense
            fallback={
              <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white text-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 border-4 border-t-4 border-gray-200 border-t-purple-500 rounded-full animate-spin"></div>
                  <span>Loading...</span>
                </div>
              </div>
            }
          >
            {CaseStudyComponent && <CaseStudyViewer onClose={handleCloseModal} content={<CaseStudyComponent />} />}
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;