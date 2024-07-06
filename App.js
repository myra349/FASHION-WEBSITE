import React, { useState } from 'react';

const Modal = ({ imageUrl, imageAlt, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    onClose(); // Optional: You can pass a function from parent component to handle additional actions on close
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <img src={imageUrl} alt={imageAlt} />
        <div className="caption">{imageAlt}</div>
      </div>
    </div>
  );
};

const App = () => {
  // Example state for image URL and alt text
  const imageUrl = 'path_to_your_image.jpg';
  const imageAlt = 'Image Caption';

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <h1>React Modal Example</h1>
      <img src={imageUrl} alt={imageAlt} onClick={openModal} />

      {showModal && (
        <Modal imageUrl={imageUrl} imageAlt={imageAlt} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;

