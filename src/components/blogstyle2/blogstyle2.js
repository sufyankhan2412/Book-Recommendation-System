import React, { useEffect } from "react";
import './blogstyle2.css';

const HomePage = () => {
  useEffect(() => {
    // Shrink Navbar on Scroll
    const navbar = document.querySelector('.navbar');
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

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

    window.addEventListener('scroll', handleScroll);

    return () => {
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

      {/* Hero Section (Single Image) */}
      <section className="hero-slider">
        <div className="hero-slide active">
          <div className="hero-overlay"></div>
          <div className="hero-content"></div>
          <img src="blog1.jpg" alt="Hero Image" className="hero-image" />
        </div>
      </section>
      


      <div className="article-content">
        <center> <h1>If you like romance, you should </h1></center>
        <center> <h1>get this book </h1></center>
        <center>

        <img src="pg5.jpeg" alt="Author" className="author-img" /> 
          <p>Ashton Porter Apr 21, 2020 0Comments</p></center>
          <div className="quote-container">
      <p>
        <span className="dropcap">Q</span>
        <span className="quote-text">
          Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget
          viverra egestas nisi in consequat. Fusce sodales augue a accumsan. 
          Cras sollicitudin, ipsum eget blandit pulvinar. Integer tincidunt. Cras 
          dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. 
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </span>
      </p>

      <p>
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
      </p>
      <h1>At vero eos et accusam</h1>
      <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
         totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae 
         dicta sunt.</p>
    </div>
    <section className="image-grid">
        <div className="grid-item">
          <img src="blog4.jpeg" alt="Image 1" />
        </div>
        <div className="grid-item">
          <img src="blog7.jpeg" alt="Image 2" />
        </div>
      </section>
      <p>Ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae 
        vitae dicta sunt, explicabo.</p>
        <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
           totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae 
           vitae dicta sunt, explicabo.</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet,
             consectetur adipiscing elit.</p>
        <blockquote>
        Curabitur varius eros et lacus rutrum consequat. Mauris sollicitudin enim condimentum,
         luctus justo non, molestie nisl.
        </blockquote>
        
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
         ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <h1>Creative approach to every project</h1>
        <p>
        Aenean et egestas nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames 
        ac turpis egestas. Fusce gravida, ligula non molestie tristique, justo elit blandit risus, blandit 
        maximus augue magna accumsan ante .Duis id mi tristique, pulvinar neque at, lobortis tortor.
        </p>
      </div>

      
        <div className="grid-item">
          <img src="blog8.jpg" alt="Image 1" />
        </div>
        <p>Stet clita kasd gubergren, no sea sanctus est labore et dolore. By Kevin Smith</p>
      <div className="article-content">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, 
         consectetur adipiscing elit.
        </p>
        
        <p>
        Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut.
         Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat,
         a tempor sem egestas. Curabitur placerat finibus lacus.
        </p>
      </div>
      <p>_____________________________________________________________________________________________________________________________________________________</p>
      {/* Buttons for Filtering */}
      <div className="button-container">
        <button className="filter-btn">Busines</button>
        <button className="filter-btn">Modern</button>
        <button className="filter-btn">Startup</button>
      </div>
      <p>_____________________________________________________________________________________________________________________________________________________</p>
      <div className="article-navigation">
      <div className="prev-next">
        <a href="#" className="prev">
          <span>❮ PREVIOUS</span>
          <p>Simple things as a book and a cup of tea make us happier</p>
        </a>
        <a href="#" className="next">
          <span>NEXT ❯</span>
          <p>How to avoid the most boring books ever</p>
        </a>
      </div>

      <div className="author-box">
        <img src="pg5.jpeg" alt="Ashton Porter" className="author-img" />
        <div className="author-info">
          <h3>Ashton Porter</h3>
          <p className="about-author">ABOUT AUTHOR</p>
          <p className="author-bio">
            Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis.
            Praesent at nulla aliquam ligula.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div className="article-content">
        <h1>Leave a comment</h1>
        <p>
       You must be logged in to post a comment.
        </p>
        <h1>You May Also Like</h1>
        </div>
        <div className="article-container2">
  <img src="blog7.jpeg" alt="Article 1" className="article-image2" />
  <img src="home1.jpeg" alt="Article 2" className="article-image2" />
</div>
<div className="cases-container">
      <div className="case-item">
      <button class="case-title" onclick="goToPage('page1.html')">Cases</button>
        <p className="case-description">A perfect book mix for rest and self-education</p>
      </div>

      <div className="case-item">
        <button class="case-title" onclick="goToPage('page2.html')">Cases</button>
        <p className="case-description">Top 10 publishing houses to consider</p>
      </div>
    </div>


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
