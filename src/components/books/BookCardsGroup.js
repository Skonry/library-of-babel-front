import React from 'react';
import { List } from 'antd';

import BookCard from './BookCard';

function BookCardsGroup({ books }) {

  return (  
    <List
      grid={{
        xs: 1,
        sm: 1,
        md: 1,
        lg: 2,
        xl: 3,
        xxl: 3
      }}
      style={{textAlign: 'center'}}
      dataSource={books}
      renderItem={item => (
        <BookCard book={item} />
      )}
    /> 
  );
}

export default BookCardsGroup;