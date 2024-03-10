import React from 'react';
import './ContactInfo.css';
import FadeIn from '../FadeIn/FadeIn.jsx';
import { AiOutlineMail, AiOutlinePhone, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const ContactInfo = () => {
  const handlePhoneClick = () => {
    const phoneNumber = '+420773101064';

    // Display a confirmation prompt with custom styling
    const confirmation = window.confirm(`Do you want to call Mr. Kalita?`);
    
    // If the user confirms, initiate the phone call
    if (confirmation) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <FadeIn>
      <div className="contact">
        <p>
          <a href="mailto:romankalita010@gmail.com" className="contact-icon" id='mail'>
            <AiOutlineMail />
          </a>
        </p>
        <p>
          <AiOutlinePhone className="contact-icon" id='phone' onClick={handlePhoneClick} />
        </p>
        <p>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-icon" id='linkedin'>
            <AiFillLinkedin />
          </a>
        </p>
        <p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-icon" id='github'>
            <AiFillGithub />
          </a>
        </p>
      </div>
    </FadeIn>
  );
};

export default ContactInfo;