import React, { useEffect } from 'react';
import { Row, Col, Typography, Empty, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import BookCardsGroup from '../components/userBooks/UserBookCardsGroup';
import LibraryShelves from '../components/shelves/LibraryShelves';
import { getUserBooks } from '../store/features/userBooks';
import { getShelves } from '../store/features/shelves';
import { getUserReviews } from '../store/features/reviews';
import { getCurrentUser, getCurrentUserShelves, getUserBooksSelector } from '../store/selectors';

function Library() {
  const currentUserId = useSelector(getCurrentUser).id;
  const userBooks = useSelector(getUserBooksSelector);
  const shelves = useSelector(getCurrentUserShelves);
  const selectedShelf = useSelector(state => state.shelves.selectedShelf);

  const filteredBooks = userBooks.filter(userBook => userBook.shelf);

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getUserBooks());
    dispatch(getShelves());
    dispatch(getUserReviews(currentUserId));
  }, []);

  return (
    <>
      <Row style={{textAlign: 'center', marginBottom: '30px'}}>
        <Col span={24} >
          <Typography.Title>My library</Typography.Title>
        </Col>
      </Row>
      <Row style={{marginBottom: '30px'}}>
        <Col span={24}>
          <LibraryShelves shelves={shelves} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {userBooks.length === 0 ?
            (<Empty description="no books" />):
            (<BookCardsGroup userBooks={userBooks}/>)
          }
        </Col>
      </Row>
    </>
  );
}

export default Library;