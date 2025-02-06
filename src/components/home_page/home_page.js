import React, { useEffect } from "react";
import './home_page.css';

const HomePage = () => {
  useEffect(() => {
    // Shrink Navbar on Scroll
    const navbar = document.querySelector('.navbar');
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    const slides = document.querySelectorAll('.hero-slide');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    let currentSlide = 0;

    const handleScroll = () => {
      // Shrink Navbar
      if (window.scrollY > 50) {
        navbar.classList.add('shrink');
      } else {
        navbar.classList.remove('shrink');
      }

      // Show/hide Scroll to Top button
      if (scrollToTopBtn) {
        if (window.scrollY > 300) {
          scrollToTopBtn.classList.add('show');
        } else {
          scrollToTopBtn.classList.remove('show');
        }
      }
    };

    // Slider functionality
    const showSlide = (index) => {
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });
      slides[index].classList.add('active');
    };

    const nextSlide = () => {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0; // Loop back to the first slide
      }
      showSlide(currentSlide);
    };

    const prevSlide = () => {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Loop to the last slide
      }
      showSlide(currentSlide);
    };

    // Event listeners
    window.addEventListener('scroll', handleScroll);

    if (leftBtn && rightBtn) {
      leftBtn.addEventListener('click', prevSlide);
      rightBtn.addEventListener('click', nextSlide);
    }

    // Auto-slide functionality
    let autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Pause auto-slide on hover
    const heroSlider = document.querySelector('.hero-slider');
    heroSlider.addEventListener('mouseenter', () => {
      clearInterval(autoSlideInterval);
    });

    heroSlider.addEventListener('mouseleave', () => {
      autoSlideInterval = setInterval(nextSlide, 5000);
    });

    return () => {
      // Cleanup event listeners and interval
      clearInterval(autoSlideInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">READIFY</h1>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Store</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
        <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fas fa-globe"></i>
            <i className="fab fa-instagram"></i>
            <i className="fas fa-shopping-bag"></i>
        </div>
      </nav>

      {/* Hero Slider */}
      <section className="hero-slider">
        <div className="hero-slide active">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <p className="subheading">Extensive Cataloging System</p>
            <h2>Online Search Tools for Librarians</h2>
            <button className="cta-button">Read More </button>
          </div>
          <img
            src="img1.jpg"
            alt="Hero Image 1"
            className="hero-image"
          />
        </div>
        <div className="hero-slide">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <p className="subheading">Advanced Search Features</p>
            <h2>Find Books Faster and Easier</h2>
            <button className="cta-button">Explore Now </button>
          </div>
          <img
            src="img2.jpg"
            alt="Hero Image 2"
            className="hero-image"
          />
        </div>
        <div className="hero-slide">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <p className="subheading">Personalized Recommendations</p>
            <h2>Discover Your Next Favorite Book</h2>
            <button className="cta-button">Get Started </button>
          </div>
          <img
            src="img3.jpg"
            alt="Hero Image 3"
            className="hero-image"
          />
        </div>

        <button className="slider-btn left-btn">&#10094;</button>
        <button className="slider-btn right-btn">&#10095;</button>
      </section>

      {/* New section */}
      <section className="content-section">
        <div className="text-content">
          <h2>Our Creative Vision</h2>
          <h3>Inspiring Through Stories</h3>
          <p>
            At Bancic Green, we believe in the power of storytelling to
            transform lives. Our collection of books spans genres and cultures,
            offering something for every reader. Join us on a journey of
            discovery and inspiration.
          </p>
          <button className="cta-button">About us </button>
        </div>

        <div className="media-content">
          <div className="sample-image">
            <img
              src="https://images.unsplash.com/photo-1568667256549-094345857637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Sample Image"
            />
          </div>
          <div className="sample-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pGkPOcnEuSE"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="shop-section">
        <div className="shop">
          <h2>OUR SHOP</h2>
          <p>Read These Books & Start a New Life</p>
          <div className="book-grid">
            <div className="book-item">
              <h3>JOHN</h3>
              <p>So, Anyway...</p>
            </div>
            <div className="book-item">
              <h3>STEVEN</h3>
              <p>Enough About Me</p>
            </div>
            <div className="book-item">
              <h3>WHITE</h3>
              <p>His Story</p>
            </div>
            <div className="book-item">
              <h3>CLIESS</h3>
              <p>White Teeth</p>
            </div>
            <div className="book-item">
              <h3>GERRARD</h3>
              <p>Burt Geller</p>
            </div>
          </div>
          <button className="cta-button">View More Books</button>
        </div>
      </section>

      {/* Offer Section */}
      <section className="offer-section">
        <h4>WHAT WE OFFER</h4>
        <h2>Photo Gallery</h2>
        <div className="gallery">
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1573497028668-8a2ef536a1c9?w=400&auto=format&fit=crop&q=60"
              alt="Gallery Item"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1573497128723-786406d67c3a?w=400&auto=format&fit=crop&q=60"
              alt="Gallery Item"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1573497002228-b9b52a5d88b3?w=400&auto=format&fit=crop&q=60"
              alt="Gallery Item"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1573496944304-10ed1ba5b71b?w=400&auto=format&fit=crop&q=60"
              alt="Gallery Item"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
            <h3>NEWSLETTER SIGNUP</h3>
            <p>Subscribe for the Updates!</p>
            <input type="email" placeholder="Enter Your Email Address" required />
            <div className="checkbox">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">I agree to the Privacy Policy</label>
            </div>
            <button type="submit">Subscribe</button>
        </div>

        <div className="footer-section closing-details">
            <div>
            <p>AncoraThemes © 2025. All Rights Reserved.</p>
            <p>Bonnie Green</p>
            </div>

            <div className="icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
            
        </div>
        </footer>

    </div>

  );
};

export default HomePage;
