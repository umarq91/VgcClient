import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '923120991676'; // Replace with the owner's WhatsApp number
  const message = 'Hello,THIS IS FROM VGC';

  const handleClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
  };

  return (
    <button onClick={handleClick}>Send WhatsApp Message</button>
  );
};

export default WhatsAppButton;
