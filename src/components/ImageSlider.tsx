import React, { useState } from 'react';

interface ImageSliderProps {
    images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="relative w-full">
            {/* Main Image Container */}
            <div className="glass rounded-2xl overflow-hidden neon-border hover-glow">
                <div className="relative h-auto md:h-[600px] w-full">
                    {/* Image */}
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="w-full h-auto md:h-full object-contain md:object-cover transition-all duration-500"
                    />

                    {/* Gradient Overlay (desktop only) */}
                    <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            {/* Left Arrow */}
                            <button
                                onClick={goToPrevious}
                                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2  text-gray-600 p-2 md:p-3 rounded-full hover-glow transition z-10  shadow-lg bg-gray-400"
                                aria-label="Previous slide"
                            >
                                <i className="fas fa-chevron-left text-lg md:text-2xl"></i>
                            </button>

                            {/* Right Arrow */}
                            <button
                                onClick={goToNext}
                                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2  text-gray-600 p-2 md:p-3 rounded-full hover-glow transition z-10 shadow-lg bg-gray-400"
                                aria-label="Next slide"
                            >
                                <i className="fas fa-chevron-right text-lg md:text-2xl"></i>
                            </button>
                        </>
                    )}

                    {/* Slide Counter */}
                    <div className="absolute top-2 right-2 md:top-4 md:right-4  px-2 md:px-4 py-1 md:py-2 rounded-lg bg-gray-400 shadow-lg" >
                        <span className="text-gray-600  font-semibold text-sm md:text-lg">
                            {currentIndex + 1} / {images.length}
                        </span>
                    </div>
                </div>
            </div>

            {/* Thumbnail Navigation */}
            {images.length > 1 && (
                <div className="flex gap-3 md:gap-4 mt-6 overflow-x-auto pb-2">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all duration-300 ${currentIndex === index
                                ? 'neon-border scale-105'
                                : 'glass border border-purple-500/30 hover:border-purple-400'
                                }`}
                        >
                            <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}

            {/* Dots Indicator */}
            {images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${currentIndex === index
                                ? 'w-6 md:w-8 h-2.5 md:h-3 bg-purple-500'
                                : 'w-2.5 md:w-3 h-2.5 md:h-3 bg-purple-500/30 hover:bg-purple-500/50'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>

    );
};

export default ImageSlider;