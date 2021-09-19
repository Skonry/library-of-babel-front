import React from 'react';
import { Rate } from 'antd';

function Rating({ rating, handleChange }) {
  return (
    <Rate count={10} defaultValue={rating} onChange={handleChange}/>
  );
}

export default Rating;