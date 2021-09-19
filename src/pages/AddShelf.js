import React from 'react';
import { Row, Col } from 'antd';

import AddShelfForm from '../components/shelves/AddShelfForm';

function AddShelf() {
  return (
    <>
      <Row>
        <Col>
          <p>Add shelf to your library</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddShelfForm />
        </Col>
      </Row>
    </>
  );
}

export default AddShelf;