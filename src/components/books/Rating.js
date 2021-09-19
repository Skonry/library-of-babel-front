import React from 'react';
import { Rate } from 'antd';

function Rating({ rating }) {
  return (
    <Rate count={10} disabled defaultValue={rating} />
  );
}

export default Rating;