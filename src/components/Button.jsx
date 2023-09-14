// import React from 'react';

// const WhatsAppButton = () => {
//   const phoneNumber = '923120991676'; // Replace with the owner's WhatsApp number
//   const message = 'Hello,THIS IS FROM VGC';

//   const handleClick = () => {
//     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.location.href = whatsappURL;
//   };

//   return (
//     <button onClick={handleClick}>WhatsApp</button>
//   );
// };

// export default WhatsAppButton;


import React from 'react';

const PhoneCallButton = () => {
  const phoneNumber = '923329151242'; // Replace with the phone number you want to call

  const handleClick = () => {
    const phoneURL = `tel:${phoneNumber}`;
    window.location.href = phoneURL;
  };

  return (
    <button onClick={handleClick}>Call Phone Number</button>
  );
};

export default PhoneCallButton;
