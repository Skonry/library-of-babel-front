import React, { useEffect } from 'react';
import { Button, Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import BookCardsGroup from '../components/books/BookCardsGroup';
import { getBooks } from '../store/features/books';
import { getUserBooks } from '../store/features/userBooks';
import { getShelves } from '../store/features/shelves';
import { getBooksSelector, getCurrentUser } from '../store/selectors';

function Books() {
  const dispatch = useDispatch();
  const books = useSelector(getBooksSelector);
  const currentUser = useSelector(getCurrentUser);
  const history = useHistory();

  useEffect(() => {
    dispatch(getBooks());
    if (currentUser) {
      dispatch(getShelves());
      dispatch(getUserBooks());
    }
  }, []);
  
  return (
    <>
    {currentUser && 
     <Row>
      <Col>
        <p>Add book to service</p>
      </Col>
      <Col>
        <Button onClick={() => history.push('/books/add-book')}>Add</Button>
      </Col>
     </Row>
    }
     <Row>
       <Col>
        <BookCardsGroup books={books} />
       </Col>
     </Row>
    </>
  );
}

export default Books;