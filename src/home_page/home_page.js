import React, { useEffect, useState } from 'react';
import './home_page.css';
import'./home_page.html'

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.classList.toggle('shrink', window.scrollY > 50);
            }

            setShowScrollButton(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const slides = document.querySelectorAll('.hero-slide');

    const showSlide = (index) => {
        slides.forEach((slide) => slide.classList.remove('active'));
        slides[index]?.classList.add('active');
    };

    const nextSlide = () => {
        const newSlide = (currentSlide + 1) % slides.length;
        setCurrentSlide(newSlide);
        showSlide(newSlide);
    };

    const prevSlide = () => {
        const newSlide = (currentSlide - 1 + slides.length) % slides.length;
        setCurrentSlide(newSlide);
        showSlide(newSlide);
    };

    useEffect(() => {
        showSlide(currentSlide);
    }, [currentSlide]);

    useEffect(() => {
        const autoSlideInterval = setInterval(nextSlide, 5000);

        const heroSlider = document.querySelector('.hero-slider');
        if (heroSlider) {
            heroSlider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
            heroSlider.addEventListener('mouseleave', () => setInterval(nextSlide, 5000));
        }

        return () => clearInterval(autoSlideInterval);
    }, []);

    return (
        <div className="home-page">
            {/* Navbar */}
            <nav className="navbar">Navbar Content</nav>

            {/* Hero Slider */}
            <div className="hero-slider">
                <div className="hero-slide active">Slide 1</div>
                <div className="hero-slide">Slide 2</div>
                <div className="hero-slide">Slide 3</div>

                <button className="left-btn" onClick={prevSlide}>&#10094;</button>
                <button className="right-btn" onClick={nextSlide}>&#10095;</button>
            </div>

            {/* Scroll to Top Button */}
            {showScrollButton && (
                <button id="scrollToTopBtn" onClick={scrollToTop}>▲</button>
            )}
        </div>
    );
};

export default HomePage;
