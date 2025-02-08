import React from 'react';
import './signup_page.css';

const SignupPage = () => {
  return (
    <div className="cotn_principal">
      <div className="cont_centrar">
        <div className="cont_login">
          <div className="cont_back_info">
            <div className="cont_img_back_grey">
              <img src="https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-0.3.5&q=50&fm=jpg&crop=entropy&s=7686972873678f32efaf2cd79671673d" alt="background" />
            </div>
          </div>

          <div className="cont_forms">
            <div className="cont_img_back_">
              <img src="https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-0.3.5&q=50&fm=jpg&crop=entropy&s=7686972873678f32efaf2cd79671673d" alt="background" />
            </div>

            <div className="cont_form_sign_up">
              <h2>SIGN UP</h2>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button className="btn_sign_up">SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;