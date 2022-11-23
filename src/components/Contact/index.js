import React from 'react'
import { } from 'react-icons';
import { Link } from 'react-router-dom';
import { RiInstagramFill ,RiWhatsappFill,RiMapPin2Fill} from "react-icons/ri";

import './styles.scss'



const Contact = () => {

	const handleClick=()=>{
		console.log("clicked");
	}
	return (
    <div id="contact" className=" contact">
      <div className="container">
        <div className="contact-header">
          <h1>Get in touch with us</h1>
          <p>
            Charles, Prince of Wales, is the heir apparent to the British throne
            as the eldest son of Queen Elizabeth II. He has been heir apparent
            as well as Duke of Cornwall and Duke of Rothesay since 1952, and is
            both the oldest and the longest-serving heir apparent in British
            history
          </p>

          <form className="email-form">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <button className="submitButton" type="submit">
              Send
            </button>
          </form>
          <div className="social-links">
           
           

			<button
              className="social-link"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.instagram.com/theglampingvillagepune/";
              }}
            >
              {" "}
              <RiInstagramFill />
            </button>

			<button
              className="social-link"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.instagram.com/theglampingvillagepune/";
              }}
            >
              {" "}
              <RiWhatsappFill />
            </button>


            <button
              className="social-link"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://goo.gl/maps/qKmC4YnWKkzKfLAA6";
              }}
            >
              {" "}
              <RiMapPin2Fill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
