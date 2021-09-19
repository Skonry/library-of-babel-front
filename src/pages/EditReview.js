import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Input, Button } from 'antd';
import { useHistory, useParams } from 'react-router-dom';

import { editReviewContent } from '../store/features/reviews';
import { getCurrentUserReviews } from '../store/selectors';

function EditReview() {
  const { reviewId } = useParams();
  const history = useHistory();
  const review = useSelector(getCurrentUserReviews).find(review => review.id == reviewId);
  const dispatch = useDispatch();
  const [text, setText] = useState(review ? review.content : '');
  
  const onClickButton = () => {
    dispatch(editReviewContent({ content: text, reviewId })).then(() => history.push('/library'));
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
            Edit review
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default EditReview;