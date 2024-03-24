import React, { useState } from 'react';
import './ContactInfo.css';
import './Modal.css'
import FadeIn from '../FadeIn/FadeIn.jsx';
import Modal from 'react-modal';
import { AiOutlineMail, AiOutlinePhone, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const ContactInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhoneClick = () => {
    // Display a confirmation modal
    setIsModalOpen(true);
  };

  const handleConfirmCall = () => {
    const phoneNumber = '+420773101064';
    
    // Check if FaceTime is supported
    if (window.confirm('Do you want to open FaceTime?')) {
      // Open FaceTime
      window.location.href = `facetime:${phoneNumber}`;
    } else {
      // Open regular phone call
      window.location.href = `tel:${phoneNumber}`;
    }

    // Close the modal
    setIsModalOpen(false);
  };

  const handleCancelCall = () => {
    // Close the modal
    setIsModalOpen(false);
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
          <a href="https://github.com/EndlessMissery" target="_blank" rel="noopener noreferrer" className="contact-icon" id='github'>
            <AiFillGithub />
          </a>
        </p>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCancelCall}
          contentLabel="Custom Modal"
          className="custom-modal" // Add a class name to the modal container
          overlayClassName="custom-overlay" // Add a class name to the overlay
          style={{
            content: {
              width: '300px',
              margin: 'auto',
              padding: '20px',
              borderRadius: '8px',
            },
          }}>
          <p className="modal-text">Do you want to call Roman on his number +420 773 101 064?</p>
          <button className="modal-button cancel" onClick={handleCancelCall}>Cancel</button>
          <button className="modal-button confirm" onClick={handleConfirmCall}>OK</button>
        </Modal>
      </div>
    </FadeIn>
  );
};

export default ContactInfo;