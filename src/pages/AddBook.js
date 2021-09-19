import React from 'react';
import { Row, Col } from 'antd';

import AddBookForm from '../components/books/AddBookForm';

function AddBook() {
  return (
    <Row justify="center">
      <Col>
        <AddBookForm />
      </Col>
    </Row>
  );
}

export default AddBook;