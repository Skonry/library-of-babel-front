import React from 'react';
import { Image } from 'semantic-ui-react';

import starImage from '../../images/star.svg';
import epmtyStarImage from '../../images/star-empty.svg';

function RatingStar({ filled, onClickStar, onHoverStar }) {
  return (
    <>
      <Image
        height="20"
        onClick={onClickStar}
        onMouseEnter={() => onHoverStar()}
        src={filled ? starImage : epmtyStarImage} 
        width="20"
      />
    </>
  );
}

export default RatingStar;