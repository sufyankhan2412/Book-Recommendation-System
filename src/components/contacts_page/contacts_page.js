import React, { useEffect } from "react";
import { 
    FaUser, 
    FaEnvelope, 
    FaPhone, 
    FaInfoCircle, 
    FaPaperPlane, 
    FaMapMarkerAlt, 
    FaFacebook, 
    FaTwitter, 
    FaDribbble, 
    FaInstagram 
  } from "react-icons/fa";
import './contacts_page.css';

const ContactsPage = () => {
  useEffect(() => {
    // Shrink Navbar on Scroll
    const navbar = document.querySelector('.navbar');
    let currentSlide = 0;

    const handleScroll = () => {
      // Shrink Navbar
      if (window.scrollY > 50) {
        navbar.classList.add('shrink');
      } else {
        navbar.classList.remove('shrink');
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup event listeners and interval
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

    {/* CONTACT PIC */}
    <section className="CONTACT-UP">
        <h1>CONTACT</h1>
    </section>
    
      {/* Contact Details Section */}
      <section className="contacts-container">
      <div className="container">
        
        {/* Left - Contact Details */}
        <div className="contact-details">
          <h2 className="section-title">Contact Details</h2>
          <p className="contact-text"><FaMapMarkerAlt /> 785 15th Street, Office 478</p>
          <p className="contact-text">Berlin, DE 81566</p>
          <p className="contact-text">info@email.com</p>
          <p className="contact-text contact-bold">+1 840 841 25 69</p>
          
          {/* Social Icons */}
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaDribbble /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="contact-form">
          <h2 className="section-title">Get In Touch</h2>
          <form className="form-container">
            
            {/* Name */}
            <div className="input-group">
              <FaUser className="input-icon" />
              <input type="text" placeholder="Name" required className="form-input" />
            </div>

            {/* Email */}
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input type="email" placeholder="Email Address" required className="form-input" />
            </div>

            {/* Phone */}
            <div className="input-group">
              <FaPhone className="input-icon" />
              <input type="tel" placeholder="Phone" required className="form-input" />
            </div>

            {/* Subject */}
            <div className="input-group">
              <FaInfoCircle className="input-icon" />
              <input type="text" placeholder="Subject" required className="form-input" />
            </div>

            {/* Message */}
            <div className="input-group">
              <FaPaperPlane className="input-icon" />
              <textarea placeholder="How can we help you? Feel free to get in touch!" required className="form-textarea"></textarea>
            </div>

            {/* Checkbox */}
            <div className="checkbox-container">
              <input type="checkbox" id="agree" className="checkbox" />
              <label htmlFor="agree" className="checkbox-label">
                I agree that my data is <a href="#">collected and stored</a>.
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="form-button">
              <FaPaperPlane className="button-icon" /> Get In Touch
            </button>

          </form>
        </div>
      </div>
    </section>


      {/* About Us Section */}
    <section className="about-us">
        <h2>We Create Comfy Atmosphere for You</h2>
        <button className="about-btn">About Us</button>
    </section>


      {/* Footer Section */}
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

export default ContactsPage;