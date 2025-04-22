import React, { useEffect } from "react";
import './home_page.css';

const HomePage = () => {
  useEffect(() => {
    // Shrink Navbar on Scroll
    const navbar = document.querySelector('.navbar');
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
          <li className="dropdown"><a href="#">Home</a></li>
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
          <li><a href="C:\Users\JOY Unicorn User\Desktop\project\Book-Recommendation-System\src\components\contacts_page\contacts_page.js">Contacts</a></li>
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
            src="img2.jpg"
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
            src="slider5.jpg"
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
            src="books.jpg"
            alt="Hero Image 3"
            className="hero-image"
          />
        </div>

        <button className="slider-btn left-btn">&#10094;</button>
        <button className="slider-btn right-btn">&#10095;</button>
      </section>

      {/* content section */}
      <section className="creative-vision">
      <div className="text-content">
        <h4>CREATIVE VISION</h4>
        <h2>We Collect & Publish Books</h2>
        <p>
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
          aut odit aut fugit sed quia.
        </p>
        <button className="cta-button">About Us</button>
      </div>

      <div className="media-content">
        {/* Background Image */}
        <img src="library.jpeg" alt="Bookshelf" className="background-image" />

        {/* Foreground Image + Play Button */}
        <div className="video-wrapper">
          <img src="blog19.jpg" alt="Library" className="thumbnail" />
          <a
            href="https://player.vimeo.com/video/444825944?h=74d9b29d04"
            className="play-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶
          </a>
        </div>
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
                      <img src="book9.jpg" alt="So, Anyway..."/>
                      <div class="icon-container">
                          <button class="icon-btn"><i class="fas fa-heart"></i></button>
                          <button class="icon-btn"><i className="fas fa-shopping-bag"></i></button>
                          <button class="icon-btn"><i class="fas fa-arrow-right"></i></button>
                      </div>
                  </div>
                  <h3>The Kite Runner</h3>
                  <p>KHALED HOSSEINI</p>
                </div>
                <div class="book-item">
                    <div class="book-image">
                        <img src="book8.jpg" alt="Enough About Me"/>
                        <div class="icon-container">
                            <button class="icon-btn"><i class="fas fa-heart"></i></button>
                            <button class="icon-btn"><i className="fas fa-shopping-bag"></i></button>
                            <button class="icon-btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <h3>IKIGAI</h3>
                    <p>HECTOR GRACIA</p>
                </div>
                <div class="book-item">
                    <div class="book-image">
                        <img src="book6.jpg" alt="His Story"/>
                        <div class="icon-container">
                            
                            <button class="icon-btn"><i class="fas fa-heart"></i></button>
                            <button class="icon-btn"><i className="fas fa-shopping-bag"></i></button>
                            <button class="icon-btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <h3>The Forty Rules of Love</h3>
                    <p>ELIF SHAFAK</p>
                </div>
                <div class="book-item">
                    <div class="book-image">
                        <img src="book7.jpg" alt="White Teeth"/>
                        <div class="icon-container">
                            <button class="icon-btn"><i class="fas fa-heart"></i></button>
                            <button class="icon-btn"><i className="fas fa-shopping-bag"></i></button>
                            <button class="icon-btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <h3>Think and Grow Rich</h3>
                    <p>NAPOLEON HILL</p>
                </div>
            </div>
            <button class="cta-button">View More Books</button>
          </div>
      </section>

      {/* Blog Section */}
      <section className="blog-updates">
        <h3 className="section-subtitle">WHAT'S NEW</h3>
        <h2 className="section-title">Blog Updates</h2>

        <div className="blog-container">
          {/* Left Side: Image with Text Below */}
          <div className="blog-main">
            <img
              src="blog17.jpg"
              alt="Book on Beach"
              className="blog-main-image"
              onclick="window.location.href='newScreen.html'" /* Redirect to new screen */
            />
            <span className="blog-label">UPDATES</span>
            <p className="image-text" onclick="window.location.href='newScreen.html'"> WHAT DO YOU NEED FOR A CALM AND RELAXING VACATION </p>
            <p>Growing in excellence, but undergoing hardship and pain at work. For even the least effort is acceptable</p>
          </div>

          {/* Right Side: Blog Entries */}
          <div className="blog-list">
            <div className="blog-item">
              <img src="home-blog.jpeg" alt="Blog 1" className="blog-thumbnail" />
              <div className="blog-content">
                <span className="blog-category">UPDATES • Mar 13, 2020</span>
                <h3 className="blog-title">Start your day properly with the hottest novelties</h3>
              </div>
            </div>

            <div className="blog-item">
              <img src="home-blog4.jpeg" alt="Blog 2" className="blog-thumbnail" />
              <div className="blog-content">
                <span className="blog-category">UPDATES • Mar 13, 2020</span>
                <h3 className="blog-title">Who is your favorite science fiction author?</h3>
              </div>
            </div>
            <div className="blog-item">
              <img src="home-blog2.jpeg" alt="Blog 2" className="blog-thumbnail" />
              <div className="blog-content">
                <span className="blog-category">UPDATES • Mar 13, 2020</span>
                <h3 className="blog-title">Who is your favorite science fiction author?</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section class="offer-section">
          <h4>What We Offer</h4>
          <h2>Photo Gallery</h2>
          
          <div class="gallery">
              <div class="gallery-item">
                  <img src="blog1.jpg" alt="Category 1"/>
                  <div class="overlay">
                      <h3>Popular Novels</h3>
                      <p>Literature</p>
                  </div>
              </div>
              <div class="gallery-item">
                  <img src="blog2.jpg" alt="Category 2"/>
                  <div class="overlay">
                      <h3>Classic Literature</h3>
                      <p>Literature</p>
                  </div>
              </div>
              <div class="gallery-item">
                  <img src="blog16.jpg" alt="Category 3"/>
                  <div class="overlay">
                      <h3>Fantasy</h3>
                      <p>Literature</p>
                  </div>
              </div>
              <div class="gallery-item">
                  <img src="blog17.jpg" alt="Category 4"/>
                  <div class="overlay">
                      <h3>Drama & Romance</h3>
                      <p>Literature</p>
                  </div>
              </div>
              <div class="gallery-item">
                  <img src="blog18.jpg" alt="Category 5"/>
                  <div class="overlay">
                      <h3>Humor</h3>
                      <p>Literature</p>
                  </div>
              </div>
              <div class="gallery-item">
                  <img src="blog19.jpg" alt="Category 6"/>
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
