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
          <li className="dropdown">
            <a href="#">Home</a>
            <ul className="dropdown-menu">
              <li><a href="#">Home 1</a></li>
              <li><a href="#">Home 2</a></li>
              <li><a href="#">Home 3</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Pages</a>
            <ul className="dropdown-menu">
              <li><a href="#">Events</a></li>
              <li><a href="#">Typography</a></li>
              <li><a href="#">Shortcodes</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Service Plus</a></li>
            </ul>
          </li>
          <li className="dropdown-blog">
            <a href="#">Blog</a>

              <ul className="dropdown-menu-blog">
                {/* Blog Styles 1 Section */}
                <li className="dropdown-section-blog">
                  <span className="section-title">Blog Styles 1</span>
                  <ul className="blog-columns">
                    <li><a href="#">Standard</a></li>
                    <li><a href="#">List</a></li>
                    <li><a href="#">Masonry 2 Columns</a></li>
                    <li><a href="#">Masonry 3 Columns</a></li>
                    <li><a href="#">Masonry 4 Columns</a></li>
                  </ul>
                </li>

                {/* Blog Styles 2 Section */}
                <li className="dropdown-section-blog">
                  <span className="section-title">Blog Styles 2</span>
                  <ul className="blog-columns">
                    <li><a href="#">Portfolio 3 Columns</a></li>
                    <li><a href="#">Portfolio 4 Columns</a></li>
                    <li><a href="#">Grid 2 Columns</a></li>
                    <li><a href="#">Grid 3 Columns</a></li>
                    <li><a href="#">Grid 4 Columns</a></li>
                  </ul>
                </li>

                {/* Single Posts Section */}
                <li className="dropdown-section-blog">
                  <span className="section-title">Single Posts</span>
                  <ul className="blog-columns">
                    <li><a href="#">Style 1</a></li>
                    <li><a href="#">Style 2</a></li>
                    <li><a href="#">With Sidebar</a></li>
                    <li><a href="#">Video</a></li>
                    <li><a href="#">Audio</a></li>
                    <li><a href="#">Gallery</a></li>
                  </ul>
                </li>
              </ul>

            
          </li>
          <li><a href="#">About Us</a></li>
          <li className="dropdown">
            <a href="#">Store</a>
            <ul className="dropdown-menu">
              <li><a href="#">Store 1</a></li>
              <li><a href="#">Store 2</a></li>
              <li><a href="#">Store 3</a></li>
            </ul>
          </li>
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
            <p className="subheading">Broden Your Horizon</p>
            <h2>Find New Life-changing Ideas with Us</h2>
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
            <p className="subheading">EXCELLENT BOOK COLLECTION</p>
            <h2>Get Latest BestSellers or True Classics</h2>
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
              src="libraryimage.jpeg"
              alt="Sample Image"
            />
          </div>
         
      {/*  <div className="sample-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pGkPOcnEuSE"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          */}
        </div>
      </section>

      {/* Shop Section */}
      <section class="shop-section">
        <div class="shop">
            <h4>OUR SHOP</h4>
            <h2>Read These Books & Start a New Life</h2>
            <div class="book-grid">
                <div class="book-item">
                    <div class="book-image">
                        <img src="https://images.unsplash.com/photo-1652571305415-03416a741883?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="So, Anyway..."/>
                        <div class="icon-container">
                            <button class="icon-btn"><i class="fas fa-heart"></i></button>
                            <button class="icon-btn"><i className="fas fa-shopping-bag"></i></button>
                            <button class="icon-btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <h3>So, Anyway...</h3>
                    <p>Burt Geller</p>
                </div>
                <div class="book-item">
                    <div class="book-image">
                        <img src="https://images.unsplash.com/photo-1511108690759-009324a90311?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUzfHx8ZW58MHx8fHx8" alt="Enough About Me"/>
                        <div class="icon-container">
                            
                            <button class="icon-btn"><i class="fas fa-heart"></i></button>
                            <button class="icon-btn"><i className="fas fa-shopping-bag"></i></button>
                            <button class="icon-btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <h3>Enough About Me</h3>
                    <p>Richard Mann</p>
                </div>
                <div class="book-item">
                    <div class="book-image">
                        <img src="https://images.unsplash.com/photo-1610700786096-dc8b2bc53702?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8" alt="His Story"/>
                        <div class="icon-container">
                            
                            <button class="icon-btn"><i class="fas fa-heart"></i></button>
                            <button class="icon-btn"><i className="fas fa-shopping-bag"></i></button>
                            <button class="icon-btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <h3>His Story</h3>
                    <p>Karen Perry</p>
                </div>
                <div class="book-item">
                    <div class="book-image">
                        <img src="https://images.unsplash.com/photo-1711185896213-83f3f2e20fd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8" alt="White Teeth"/>
                        <div class="icon-container">
                            <button class="icon-btn"><i class="fas fa-heart"></i></button>
                            <button class="icon-btn"><i className="fas fa-shopping-bag"></i></button>
                            <button class="icon-btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <h3>White Teeth</h3>
                    <p>Drew Barrymore</p>
                </div>
            </div>
            <button class="cta-button">View More Books</button>
        </div>
    </section>

    <section class="offer-section">
        <h4>What We Offer</h4>
        <h2>Photo Gallery</h2>
        
        <div class="gallery">
            <div class="gallery-item">
                <img src="photogallery1.jpeg" alt="Category 1"/>
                <div class="overlay">
                    <h3>Popular Novels</h3>
                    <p>Literature</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="photogallery2.jpeg" alt="Category 2"/>
                <div class="overlay">
                    <h3>Classic Literature</h3>
                    <p>Literature</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="photogallery3.jpeg" alt="Category 3"/>
                <div class="overlay">
                    <h3>Fantasy</h3>
                    <p>Literature</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="photogallery4.jpeg" alt="Category 4"/>
                <div class="overlay">
                    <h3>Drama & Romance</h3>
                    <p>Literature</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="photogallery5.jpeg" alt="Category 5"/>
                <div class="overlay">
                    <h3>Humor</h3>
                    <p>Literature</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="photogallery6.jpeg" alt="Category 6"/>
                <div class="overlay">
                    <h3>Poetry & plays</h3>
                    <p>Literature</p>
                </div>
            </div>
        </div>
    </section>

    {/* News Letter */}
    <section className="newsletter">
        <h3>NEWSLETTER SIGNUP</h3>
        <h2>Subscribe for the Updates!</h2>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter Your Email Address" required />
          <button type="submit">➤</button>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">I agree to the <a href="#">Privacy Policy</a></label>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        {/* Left Section */}
        <div className="footer-left">
          <p>AncoraThemes © 2025. All Rights Reserved.</p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <p className="brand-name">Readify</p>
        </div>

        {/* Right Section */}
        <div className="footer-icons">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </footer>

    </div>

  );
};

export default HomePage;
