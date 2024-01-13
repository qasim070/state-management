import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Car = () => {
  const carBlack = process.env.PUBLIC_URL + '/car-black.png';
  const carRed = process.env.PUBLIC_URL + '/car-red.png';

  const [imgToggle, setImgToggle] = useState(false);

  const toggleImage = () => {
    setImgToggle(!imgToggle);
  };

  return (
    <div className='container text-center'>
      <img
        src={imgToggle ? carBlack : carRed}
        alt="Car"
        className="img-fluid "
      />
      <p className=''>
      <button className='btn btn-primary' onClick={toggleImage}>
        Toggle Color
      </button>

      </p>
    </div>
  );
};

export default Car;
