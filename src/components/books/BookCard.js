import React from 'react';
import { Card } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import BookCover from '../BookCover';
import BookCardActions from './BookCardActions';
import Rating from './Rating';
import { getCurrentUser } from '../../store/selectors';

function BookCard({ book }) {
  const currentUser = useSelector(getCurrentUser);
  const history = useHistory();

  const onClickCard = () => {
    history.push(`/books/${book.id}`);
  }

  return (
    <button onClick={onClickCard} style={{padding: '0', margin: '0', marginBottom: '32px'}} >
      <Card
        hoverable
        cover={(<BookCover coverUrl={book.cover_url} />)}
        style={{height: '582px'}}
      >
        
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
          
          <p style={{padding: '0', margin: '0'}}>{book.title}</p>
          <p style={{padding: '0', margin: '0'}}>{book.author}</p>
          <Rating rating={book.rating} />
          {currentUser ? (<BookCardActions book={book} />) : null}
        </div>
        
      </Card>
    </button>
  );
}

export default BookCard;