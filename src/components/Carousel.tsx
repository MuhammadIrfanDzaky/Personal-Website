'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselProps {
  images: string[];
  alt: string;
  imagePlaceholders?: string[];
  color?: string;
}

export default function Carousel({ images, alt, imagePlaceholders, color }: CarouselProps) {
  const [[currentIndex, direction], setCurrentIndex] = useState<[number, number]>([0, 0]);
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set([0]));

  // Aggressively preload all images when component mounts
  useEffect(() => {
    // Preload images with smart priority:
    // 1. Current image (0ms)
    // 2. Next & Previous (immediate)
    // 3. First & Last images (high priority for common navigation)
    // 4. Rest of images
    const highPriority = [
      currentIndex,
      currentIndex + 1,
      currentIndex - 1,
      0, // First image
      images.length - 1 // Last image
    ];
    
    const restImages = images
      .map((_, i) => i)
      .filter(i => !highPriority.includes(i));
    
    const uniqueSet = new Set([...highPriority, ...restImages]);
    const preloadOrder = Array.from(uniqueSet).filter(i => i >= 0 && i < images.length);

    // Preload with minimal delays (20ms instead of 50ms)
    preloadOrder.forEach((index, priority) => {
      setTimeout(() => {
        const img = new window.Image();
        img.src = images[index];
        setPreloadedImages(prev => {
          const newSet = new Set(Array.from(prev));
          newSet.add(index);
          return newSet;
        });
      }, priority * 20); // Reduced from 50ms to 20ms
    });
  }, [images, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex(([prevIndex]) => [
      prevIndex > 0 ? prevIndex - 1 : prevIndex,
      -1
    ]);
  };

  const goToNext = () => {
    setCurrentIndex(([prevIndex]) => [
      prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex,
      1
    ]);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(([prevIndex]) => [index, index > prevIndex ? 1 : -1]);
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-48 bg-dark-700 flex items-center justify-center text-gray-500">
        No images available
      </div>
    );
  }

  return (
    <div className="relative w-full flex flex-col items-center group">
      {/* Main Image with Slide Animation */}
      <div className="relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-dark-800 via-dark-700 to-dark-900 shadow-2xl border border-neon-cyan/20">
        {/* Aspect ratio container - 16:9 on mobile, auto on desktop */}
        <div className="relative w-full aspect-video md:aspect-auto md:h-[400px] lg:h-[500px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex items-center justify-center p-2 md:p-4"
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                
                if (swipe > 10000) {
                  // Swiped right (go to previous)
                  if (currentIndex > 0) {
                    goToPrevious();
                  }
                } else if (swipe < -10000) {
                  // Swiped left (go to next)
                  if (currentIndex < images.length - 1) {
                    goToNext();
                  }
                }
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={images[currentIndex]}
                  alt={`${alt} - ${currentIndex + 1}`}
                  fill
                  className="object-contain pointer-events-none drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={currentIndex === 0}
                  quality={90}
                  loading="eager"
                />
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Hidden preload for ALL carousel images */}
          <div className="hidden">
            {images.map((img, idx) => (
              idx !== currentIndex && (
                <Image
                  key={img}
                  src={img}
                  alt={`preload-${idx}`}
                  width={1}
                  height={1}
                  quality={85}
                  priority={idx <= 2}
                />
              )
            ))}
          </div>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              {/* Previous Button */}
              {currentIndex > 0 && (
                <button
                  onClick={goToPrevious}
                  className="absolute left-1.5 md:left-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-dark-900/90 backdrop-blur-md border-2 border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan hover:text-dark-900 hover:scale-110 active:scale-95 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 opacity-70 active:opacity-100 shadow-lg shadow-neon-cyan/20 z-20"
                  aria-label="Previous image"
                >
                  <FaChevronLeft className="text-sm md:text-base" />
                </button>
              )}

              {/* Next Button */}
              {currentIndex < images.length - 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-1.5 md:right-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-dark-900/90 backdrop-blur-md border-2 border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan hover:text-dark-900 hover:scale-110 active:scale-95 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 opacity-70 active:opacity-100 shadow-lg shadow-neon-cyan/20 z-20"
                  aria-label="Next image"
                >
                  <FaChevronRight className="text-sm md:text-base" />
                </button>
              )}

              {/* Dots Indicator - Redesigned */}
              <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 bg-dark-900/70 backdrop-blur-md px-3 py-2 rounded-full border border-neon-cyan/20 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'bg-neon-cyan w-6 md:w-8 h-2 shadow-lg shadow-neon-cyan/50'
                        : 'bg-gray-500/60 hover:bg-gray-400 w-2 h-2'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter - Redesigned */}
              <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-dark-900/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-mono text-neon-cyan border-2 border-neon-cyan/40 shadow-lg shadow-neon-cyan/20 z-20">
                <span className="font-bold">{currentIndex + 1}</span>
                <span className="text-neon-cyan/60 mx-1">/</span>
                <span className="text-neon-cyan/80">{images.length}</span>
              </div>
            </>
          )}
        </div>
      </div>
      {/* Animated label with fade effect on slide change */}
      <AnimatePresence mode="wait">
        {imagePlaceholders && imagePlaceholders[currentIndex] && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-4 md:mt-6 flex justify-center w-full"
          >
            <span
              className={`text-xs md:text-sm font-mono text-center px-4 md:px-5 py-2 md:py-2.5 rounded-full shadow-lg backdrop-blur-md bg-dark-900/90 border-2 transition-all duration-300
                ${color === 'cyan' ? 'text-neon-cyan border-neon-cyan/50 shadow-neon-cyan/30' : ''}
                ${color === 'pink' ? 'text-neon-pink border-neon-pink/50 shadow-neon-pink/30' : ''}
                ${color === 'purple' ? 'text-neon-purple border-neon-purple/50 shadow-neon-purple/30' : ''}
                ${color === 'green' ? 'text-neon-green border-neon-green/50 shadow-neon-green/30' : ''}
              `}
            >
              {imagePlaceholders[currentIndex]}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
