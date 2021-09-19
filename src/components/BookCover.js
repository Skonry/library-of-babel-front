import React from 'react';

import bookImagePlaceHolder from '../images/book.svg';

function BookCover({coverUrl}) {
  return (
    <img 
      style={{width: '322px', height: '400px'}} 
      src={coverUrl ? coverUrl : bookImagePlaceHolder} 
    />
  );
}

export default BookCover;