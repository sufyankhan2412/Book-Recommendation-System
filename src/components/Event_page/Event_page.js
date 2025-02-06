import React, { useEffect, useState } from "react";
import './Event_page.css';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const eventsData = [
    {
      id: 1,
      title: "Top Writing Jobs Today",
      date: "Jul 1, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Manhattan Club, New York, NY, USA",
      price: "$420",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Writers' Guide 2022",
      date: "Aug 1, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Manhattan Club, New York, NY, USA",
      price: "$300",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Writing Masterclass",
      date: "Nov 1, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Manhattan Club, New York, NY, USA",
      price: "$400",
      image: "https://via.placeholder.com/150",
    },
  ];

  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      {/* Upcoming Events Section */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for events"
            className="search-box"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-btn">Find Events</button>
        </div>

        {/* Event List */}
        <div className="event-container">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event.id} className="event-item">
                <div className="event-date">
                  <div>{event.date.split(" ")[1]}</div>
                  <div style={{ fontSize: "28px" }}>{event.date.split(" ")[0]}</div>
                </div>
                <div className="event-info">
                  <h2 className="event-title">{event.title}</h2>
                  <p className="event-location">{event.location}</p>
                  <p className="event-time">{event.time}</p>
                  <p className="event-price">{event.price}</p>
                </div>
                <img src={event.image} alt={event.title} className="event-image" />
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", padding: "20px", color: "#666" }}>
              No events found.
            </p>
          )}
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
