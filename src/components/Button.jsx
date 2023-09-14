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

  
// Phone Number 

// import React from 'react';

// const PhoneCallButton = () => {
//   const phoneNumber = '923329151242'; // Replace with the phone number you want to call

//   const handleClick = () => {
//     const phoneURL = `tel:${phoneNumber}`;
//     window.location.href = phoneURL;
//   };

//   return (
//     <button onClick={handleClick}>Call Phone Number</button>
//   );
// };

// export default PhoneCallButton;


// Email



import React from 'react';

const EmailButton = () => {
  const emailAddress = 'm.umarqureshi091@gmail.com'; // Replace with the email address you want to use
  const subject = 'Regarding Your Service'; // Replace with the subject of the email
  const body = 'msg' // Replace with the body of the email

  const handleClick = () => {
    const emailURL = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailURL;
  };

  return (
    <button onClick={handleClick}>Send Email</button>
  );
};

export default EmailButton;
