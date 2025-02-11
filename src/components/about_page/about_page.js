import React, { useEffect, useRef, useState } from "react";
import './about_page.css';

const AboutPage = () => {
  const testimonialsRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false); // State to handle hiding

  useEffect(() => {
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('shrink');
      } else {
        navbar?.classList.remove('shrink');
      }
    };

    window.addEventListener('scroll', handleScroll);

    if (testimonialsRef.current && prevBtnRef.current && nextBtnRef.current) {
      let index = 0;
      const cardWidth = 270;

      const slide = (direction) => {
        if (isTransitioning) return; // Prevent multiple rapid clicks
        setIsTransitioning(true);

        setTimeout(() => {
          if (direction === "next" && index < testimonialsRef.current.children.length - 1) {
            index++;
          } else if (direction === "prev" && index > 0) {
            index--;
          }
          testimonialsRef.current.style.transform = `translateX(-${index * cardWidth}px)`;

          setTimeout(() => {
            setIsTransitioning(false); // Re-enable visibility after animation
          }, 500); // Adjust to match CSS transition
        }, 100); 
      };

      nextBtnRef.current.addEventListener("click", () => slide("next"));
      prevBtnRef.current.addEventListener("click", () => slide("prev"));
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isTransitioning]);

  return (
    <div>
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

      <section className="About-UP">
        <h1>About Us</h1>
      </section>

      <div className="container">
        <div className="text-section">
          <p>WHAT WE DO</p>
          <h1>We collect tons of books. Explore the online library now.</h1>
          <img src="img4.jpg" alt="Old Man Reading" />
        </div>

        <div className="image-section">
          <img src="blog3.jpg" alt="Book Collection" />
          <p>A wide range of books on various topics for all ages.</p>
        </div>
      </div>

      <section class="hero">
        <div class="overlay"></div>
        <div class="hero-content">
            <p class="small-text">START READING!</p>
            <h1>The World of Adventure and Thrill Awaits You on Every Page</h1>
            <button class="cta-button">Learn More</button>
        </div>
      </section>
      
      <div className="container-feed">
        <div className="left-section">
          <h5>TESTIMONIALS</h5>
          <h2>Suggestions & Feedback</h2>
          <div className="arrows">
            <button className="arrow-btn" ref={prevBtnRef}>&#8592;</button>
            <button className="arrow-btn" ref={nextBtnRef}>&#8594;</button>
          </div>
        </div>

        <div className={`testimonials ${isTransitioning ? 'hide' : ''}`} ref={testimonialsRef}>
          {[
            { name: "Yahya Abbasi", role: "User", feedback: "Well-Organized! The website design is neat, and I love how books are categorized. The search function is also very helpful!", img: "user1.jpg" },
            { name: "Abu Bakar", role: "Expert", feedback: "A fantastic platform for book lovers. The UI is intuitive, and recommendations are spot on!", img: "user2.jpg" },
            { name: "Aisha Khan", role: "Author", feedback: "A great place to showcase my books and interact with readers.", img: "user3.jpg" },
            { name: "Ali Raza", role: "Librarian", feedback: "The cataloging system is excellent, making book management effortless.", img: "user4.jpg" }
          ].map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote">&#8220;</div>
              <p>{testimonial.feedback}</p>
              <div className="user">
                <img src={testimonial.img} alt={testimonial.name} />
                <div>
                  <strong>{testimonial.name}</strong>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     

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

      <footer className="footer">
        <div className="footer-left">
          <p>AncoraThemes © 2025. All Rights Reserved.</p>
        </div>
        <div className="footer-center">
          <p className="brand-name">Readify</p>
        </div>
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

export default AboutPage;
