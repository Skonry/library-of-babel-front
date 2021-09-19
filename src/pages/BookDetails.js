import React, { useEffect } from 'react';
import { Row, Col, Typography, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getBookReviews } from '../store/features/reviews';
import { getBook } from '../store/features/books';
import BookCover from '../components/BookCover';
import BookReviews from '../components/books/BookReviews';
import { getBooksReviewsSelector, getBookById } from '../store/selectors';

function BookDetails() {
  const { bookId } = useParams();
  const book = useSelector(state => getBookById(state, bookId));
  const reviews = useSelector(getBooksReviewsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook(bookId))
    dispatch(getBookReviews(bookId));
  }, []);
  
  return (
    <>
      { book &&
        <Space direction="vertical" size="large">
          <Row align="middle">
            <Col span={8}>
              <BookCover coverUrl={book.cover_url} />
            </Col>
            <Col span={16}>
              <Space direction="vertical">
                <Typography.Text strong>
                      {book.title}
                </Typography.Text>
                <Typography.Text italic>
                    {book.author}
                </Typography.Text>
                <Typography.Text>
                    {book.description}
                </Typography.Text>
              </Space>
            </Col>
          </Row>
          <Row>
            <Col>
              <BookReviews reviews={reviews} />
            </Col>
          </Row>
        </Space>
      }
    </>
  );
}

export default BookDetails;