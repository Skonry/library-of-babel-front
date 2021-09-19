import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Card, Button } from 'antd';
import { useHistory } from 'react-router-dom';

import BookCover from '../BookCover';
import Rating from './Rating';
import { rateBook, removeUserBook } from '../../store/features/userBooks';
import { getCurrentUserReviewByUserBook } from '../../store/selectors';

function UserBookCard({ userBook }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const review = useSelector(state => getCurrentUserReviewByUserBook(state, userBook));

  const handleRemoveUserBook = () => {
    dispatch(removeUserBook(userBook.id));
  }

  const handleRatingChange = (value) => {
    dispatch(rateBook({bookId: userBook.id, rating: value}));
  }

  return (
    <button style={{padding: '0', margin: '0', marginBottom: '32px'}} >
      <Card
        hoverable
        cover={(<BookCover coverUrl={userBook.book.data.cover_url} />)}
        style={{height: '582px'}}
      >
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
          <p style={{padding: '0', margin: '0'}}>{userBook.book.data.title}</p>
          <p style={{padding: '0', margin: '0'}}>{userBook.book.data.author}</p>
          <Rating rating={userBook.user_rating} handleChange={handleRatingChange} />
          {review ?
            <Button onClick={() => history.push(`books/${userBook.book.data.id}/edit-review/${review.id}`)}>Edit review</Button> :
            <Button onClick={() => history.push(`books/${userBook.book.data.id}/add-review/`)}>Add review</Button>
          }
          <Button onClick={handleRemoveUserBook}>Remove book</Button>
        </div>
      </Card>
    </button>
  );
}

export default UserBookCard;