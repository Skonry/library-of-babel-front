import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Col, Row, Input } from 'antd';
import { useParams, useHistory } from 'react-router-dom';

import { addReview } from '../store/features/reviews';

function AddReview() {
  const [text, setText] = useState('');
  const { bookId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickButton = () => {
    const review = { content: text };
    dispatch(addReview({ review, bookId })).then(() => history.push('/library'));
  }

  return (
    <>
      <Row>
        <Col>
          <Input.TextArea onChange={(ev) => setText(ev.target.value)} value={text} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button type="primary" onClick={onClickButton}>
            Add review
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default AddReview;