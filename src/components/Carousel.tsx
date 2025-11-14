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
      <div className="relative flex flex-col items-center justify-center bg-dark-700 overflow-hidden rounded-lg max-w-full max-h-[320px] min-h-[120px] min-w-[120px]" style={{margin: '0 auto', height: '300px', width: '100%'}}>
        <div className="relative w-full h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              className="absolute left-0 top-0 w-full h-full"
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              custom={direction}
            >
              <Image
                src={images[currentIndex]}
                alt={`${alt} - ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 600px"
                priority={currentIndex === 0}
                quality={85}
                loading="eager"
              />
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

          {/* Navigation Buttons - moved inside image container so positioning anchors to this fixed-height box */}
          {images.length > 1 && (
            <>
              {/* Previous Button - hide if first image */}
              {currentIndex > 0 && (
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-dark-900/80 backdrop-blur-sm border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan hover:text-dark-900 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
                  aria-label="Previous image"
                >
                  <FaChevronLeft className="text-sm" />
                </button>
              )}

              {/* Next Button - hide if last image */}
              {currentIndex < images.length - 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-dark-900/80 backdrop-blur-sm border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan hover:text-dark-900 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
                  aria-label="Next image"
                >
                  <FaChevronRight className="text-sm" />
                </button>
              )}

              {/* Dots Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-neon-cyan w-6'
                        : 'bg-gray-500 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="absolute top-2 right-2 bg-dark-900/80 backdrop-blur-sm px-2 py-1 rounded text-sm font-mono text-neon-cyan border border-neon-cyan/30 z-20">
                {currentIndex + 1} / {images.length}
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
            className="mt-6 flex justify-center w-full"
          >
            <span
              className={`text-sm font-mono text-center px-3 py-1 rounded shadow-md bg-dark-900/80 border 
                ${color === 'cyan' ? 'text-neon-cyan border-neon-cyan/40' : ''}
                ${color === 'pink' ? 'text-neon-pink border-neon-pink/40' : ''}
                ${color === 'purple' ? 'text-neon-purple border-neon-purple/40' : ''}
                ${color === 'green' ? 'text-neon-green border-neon-green/40' : ''}
              `}
            >
              {imagePlaceholders[currentIndex]}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons - Only in image container above. Duplicate removed for clarity and to avoid overlap. */}
    </div>
  );
}
